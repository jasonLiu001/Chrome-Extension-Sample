/**
 *
 * @summary 平台自动化入口  该类是程序的入口类  按照方法上的步骤step序号来调用
 * */
function AppMain() {
    var self = this;
    self.platForm = null;
    //interval id
    self.intervalId = null;
    //用户设置
    self.userSettings = null;

}

/**
 *
 * @summary 获取用户设置
 * @param {Function} callback 回调方法
 * */
AppMain.prototype.getUserSettings = function (callback) {
    var self = this;
    chrome.storage.sync.get(null, function (optionSettings) {
        self.userSettings = optionSettings;
        if (callback && typeof callback === 'function') {
            callback();
        }
    });
};

/**
 *
 * @summary 设置用户设置
 * */
AppMain.prototype.setUserSettings = function (newSettings) {
    var self = this;
    chrome.storage.sync.set($.extend(true, {}, self.userSettings, newSettings));
};

/**
 *
 * @summary 服务提供器
 * */
AppMain.prototype.serviceProvider = function () {
    var self = this;
    //检查平台是否实现了 getLastPrizeNumber 方法
    if (!self.platFormImplementMethodsCheck(this.platForm.getLastPrizeNumber, 'getLastPrizeNumber'))return;
    return {
        //开奖时间模块
        openTimeService: new openTime({
            currentTime: new Date(),
            openTimeDelaySeconds: 0
        }),
        //获取投注号码模块
        numberService: new numberFactory({
            lastPrizeNumber: self.platForm.getLastPrizeNumber()//上期投注号码
        })
    };
};

/**
 *
 * @summary Step1: 设置平台
 * */
AppMain.prototype.setPlatform = function (platformName) {
    switch (platformName) {
        case window.enumPlatformList.jingwei://经纬平台
            this.platForm = new jingweiplatform();
            break;
        default :
            this.platForm = new jingweiplatform();
            break;
    }
};

/**
 *
 * @summary step 2: 执行自动化投注入口方法
 * */
AppMain.prototype.execInvest = function () {
    var self = this;
    if (self.intervalId != null) {
        console.error("Program is now on running already! Should not start no more! ");
        return;
    }
    //检查平台的方法实现 如果没有实现则不会执行投注
    if (!self.platFormImplementMethodsCheck(this.platForm.execInvest, 'execInvest'))return;
    if (!self.platFormImplementMethodsCheck(this.platForm.getCurrentAccountBalance, 'getCurrentAccountBalance'))return;
    if (!self.platFormImplementMethodsCheck(this.platForm.getLastPeriodNumberString, 'getLastPeriodNumberString'))return;
    if (!self.platFormImplementMethodsCheck(this.platForm.getCurrentPeriodNumberString, 'getCurrentPeriodNumberString'))return;

    //账户初始余额
    var originalAccountBalance = 0;
    //获取用户设置 主要是为了获取 初始账户余额值
    self.getUserSettings(function () {
        originalAccountBalance = self.userSettings.normalSettings.accountBalance;
    });

    console.log('Program has started now!');
    this.intervalId = setInterval(function () {
        //获取时间和号码生成服务
        var service = self.serviceProvider();


        /****************** 校验：期号校验 start*********************************/
        //获取上期期号
        var lastPeriodNumberString = self.platForm.getLastPeriodNumberString();
        //获取投注期期号
        var currentPeriodNumberString = self.platForm.getCurrentPeriodNumberString();
        //如果期号前半部分相等 同一天的情况
        if (lastPeriodNumberString.substring(0, lastPeriodNumberString.indexOf('-')) == currentPeriodNumberString.substring(0, currentPeriodNumberString.indexOf('-'))) {
            //期号的差 不等于1 说明不是要投注的下一期的期号
            if (parseInt(currentPeriodNumberString.substring(currentPeriodNumberString.indexOf('-') + 1)) - parseInt(lastPeriodNumberString.substring(lastPeriodNumberString.indexOf('-') + 1)) != 1) {
                //条件: 期号和当前要投的期号是否一致，一致投注，不一致则继续等待
                console.log('Wait for the next. because the current period number is not the one we need to invest!');
                return;
            }
        } else {//隔天期号的情况 期号的差 不等于119 说明不是要投注的下一期的期号
            if (parseInt(lastPeriodNumberString.substring(lastPeriodNumberString.indexOf('-') + 1)) - parseInt(currentPeriodNumberString.substring(currentPeriodNumberString.indexOf('-') + 1)) != 119) {
                //条件: 期号和当前要投的期号是否一致，一致投注，不一致则继续等待
                console.log('Wait for the next. because the current period number is not the one we need to invest!');
                return;
            }
        }
        /****************** 校验：期号校验 end*********************************/


        /****************** 校验：开奖号是否已经出来 start*********************************/
        var lastPrizeNumber = self.platForm.getLastPrizeNumber();
        if (isNaN(lastPrizeNumber)) {
            console.log('Wait for the prize number come out.');
            return;
        }
        /****************** 校验：开奖号是否已经出来 end*********************************/


        /****************** 校验：盈亏校验 start*********************************/
            //获取当前账户余额
        currentAccountBalance = self.platForm.getCurrentAccountBalance();
        //更新 当前的账户余额
        self.setUserSettings({normalSettings: {accountBalance: currentAccountBalance}});
        //最大盈利金额
        var maxWinMoney = self.userSettings.normalSettings.maxWinMoney;
        //最大亏损金额
        var maxLoseMoney = self.userSettings.normalSettings.maxLoseMoney;
        //当前余额 和 初始余额 差值
        var accountDiff = currentAccountBalance - originalAccountBalance;
        //条件：判定盈利是否已经到达最大，或者亏损到达最大，停止投注
        if ((accountDiff > 0 && accountDiff >= maxWinMoney) || (accountDiff < 0 && Math.abs(accountDiff) >= maxLoseMoney)) {
            console.log('Invest auto stop! Reached maxWinMoney or maxLoseMoney');
            return;
        }
        /****************** 校验：盈亏校验 end*********************************/


        /****************** 校验：投注时间校验 start*********************************/
        //条件：是否到了投注时间，到了则投注，没到时间则继续等待
        if (!service.openTimeService.isInvestTime()) {
            console.log('Now we can not start invest!Current Time:' + moment().format('HH:mm:ss'));
            return;
        }
        /****************** 校验：投注时间校验 end*********************************/

        /****************** 校验：当前号码是否满足投注规则 start*********************************/
        if (!service.numberService.isNeededPrizeNumber()) {
            console.log('Last prize number do not satisfied the invest rules!');
            return;
        }
        /****************** 校验：当前号码是否满足投注规则 end*********************************/

        //当前的投注号码获取模块
        var investNumberString = service.numberService.getInvestNumberString();
        //执行UI自动投注
        self.platForm.execInvest(investNumberString);//执行ui投注
        console.log('Auto invest successfully.Current Time:' + moment().format('HH:mm:ss'));
    }, 4000);
};

/**
 *
 * @summary 停止自动投注
 * */
AppMain.prototype.stopInvest = function () {
    var self = this;
    clearInterval(self.intervalId);
    //重置定时器
    self.intervalId = null;
    console.log('Program has stopped manually!');
};

/**
 *
 * @summary 检查方法默认实现
 * */
AppMain.prototype.platFormImplementMethodsCheck = function (func, funcName) {
    var self = this;
    if (self.platForm === null) {
        console.error('The property platForm is null, should use \'setPlatform\' to define a platform first. ');
        return false;
    }

    if (!(func && typeof (func) === 'function')) {
        console.error('The platform must implement the method \'' + funcName + '\'.');
        return false;
    }
    return true;
};

/**
 *
 * @summary 初始化自动投注对象，初始化完成后，需要立即调用方法=>setPlatform
 * setPlatform => 用来设置实际投注的平台，如果平台发生改变，需要改变该方法中调用的枚举值
 * */
var appmain = new AppMain();
//【必须】首先设置平台为经纬平台，或者为其他平台
appmain.setPlatform(enumPlatformList.jingwei);