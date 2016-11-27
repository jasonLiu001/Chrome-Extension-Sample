/**
 *
 * @summary 平台自动化入口  该类是程序的入口类  按照方法上的步骤step序号来调用
 * */
function AppMain() {
    var self = this;
    self.platForm = null;
    //interval id
    self.intervalId = null;
}

/**
 *
 * @summary 服务提供器
 * */
AppMain.prototype.serviceProvider = function () {
    var self = this;
    return {
        //开奖时间模块
        openTimeService: new openTime({
            currentTime: new Date(),
            openTimeDelaySeconds: 0
        }),
        //获取投注号码模块
        numberService: new numberFactory({
            lastPrizeNumberString: self.platForm.getLastPrizeNumberString()//上期投注号码
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
    self.implementVerify(this.platForm.execInvest, 'execInvest');
    console.log('Program has started now!');
    this.intervalId = setInterval(function () {
        var service = self.serviceProvider();
        //需要中奖模块暴露出上期投注是否中奖，这样才能为下一步的盈利计算，提供必要的依据
        //判定盈利是否已经到达最大，或者亏损到达最大，停止投注
        //是否到了投注时间，到了则投注，没到时间则继续等待
        //期号和当前要投的期号是否一致，一致投注，不一致则继续等待
        //当前的投注号码获取模块
        //执行UI自动投注
        if (!service.openTimeService.isInvestTime()) {
            console.log('Now we can not start invest!Current Time:' + moment().format('HH:mm:ss'));
        } else {
            self.platForm.execInvest();//执行ui投注
            console.log('We can invest! Time:' + moment().format('HH:mm:ss'))
        }
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
AppMain.prototype.implementVerify = function (func, funcName) {
    var self = this;
    if (self.platForm === null) {
        console.error('The property platForm is null, should use \'setPlatform\' to define a platform first. ');
    }

    if (!(func && typeof (func) === 'function')) {
        console.error('The platform must implement the method \'' + funcName + '\'.');
    }
};

/**
 *
 * @summary 初始化自动投注对象，初始化完成后，需要立即调用方法=>setPlatform
 * setPlatform => 用来设置实际投注的平台，如果平台发生改变，需要改变该方法中调用的枚举值
 * */
var appmain = new AppMain();
//【必须】首先设置平台为经纬平台，或者为其他平台
appmain.setPlatform(enumPlatformList.jingwei);