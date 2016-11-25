;
/**
 *
 * @summary 盈利计算模块 模块设计原则：独立不要有外部依赖,需要的都通过参数传递的方式来完成
 * */
function profit(options) {
    //用户设置
    this.userSettings = options.userSettings;
    //Testing requirement.
    if (options.currentAccountBalance != undefined) {
        this.currentAccountBalance = options.currentAccountBalance;
        currentAccountBalance = options.currentAccountBalance;
    }
}

/**
 *
 * @summary 是否可以执行投注
 * @param {Object} playModeEnumItem 玩法模式枚举值
 * @return {Boolean} 是否可以执行投注
 * */
profit.prototype.enableExecInvest = function (playModeEnumItem) {
    var maxWinMoney = this.userSettings.normalSettings.maxWinMoney;
    var maxLoseMoney = this.userSettings.normalSettings.maxLoseMoney;
    var totalWinMoney = this.getTotalWinMoney(playModeEnumItem);
    if (Math.abs(totalWinMoney) >= maxWinMoney || Math.abs(totalWinMoney) >= maxLoseMoney) {
        return false;
    }
    return true;
};

/**
 *
 * @summary 单次投注中奖后的盈利金额  奖金-本次投注金额=单次盈利金额
 * @param {String} investNumberString 投注的号码字符
 * @param {Object} playModeEnumItem 玩法模式枚举值
 * @param {Boolean} isWinPrize 是否中奖
 * @return {Number} 盈利金额 如果未中奖，盈利金额则为负数
 * */
profit.prototype.getWinMoney = function (investNumberString, playModeEnumItem, isWinPrize) {
    var money = 0;
    var prizeMoney = this.userSettings.normalSettings.prizeMoney;//最大奖金
    var playMode = this.userSettings.normalSettings.playMode;//玩法模式
    var investMoney = this.getInvestMoney(investNumberString, playModeEnumItem);
    switch (playMode) {
        case playModeEnumItem.yuan://元模式
            if (isWinPrize) {
                money = prizeMoney - investMoney;
            } else {
                money = -investMoney;
            }
            break;
        case playModeEnumItem.jiao://角模式
            if (isWinPrize) {
                money = (((prizeMoney / 10) * 100) - investMoney * 100) / 100;
            } else {
                money = -(investMoney / 10);
            }
            break;
        case playModeEnumItem.feng://分模式
            if (isWinPrize) {
                money = (((prizeMoney / 100) * 100) - (investMoney * 100)) / 100;
            } else {
                money = -(investMoney / 100);
            }
            break;
    }
    return money;
};

/**
 *
 * @summary 投注的金额
 * @param {String} investNumberString 投注的号码字符
 * @param {Object} playModeEnumItem 玩法模式枚举值
 * @return {Number} 本局投注金额
 * */
profit.prototype.getInvestMoney = function (investNumberString, playModeEnumItem) {
    var playMode = this.userSettings.normalSettings.playMode;//玩法模式
    var investNumberArray = investNumberString.trim().split(/[ ,]/);
    var filterNumberArray = [];
    //过滤掉多余空白项
    for (var i = 0; i < investNumberArray.length; i++) {
        var item = investNumberArray[i];
        if (item != '') {
            filterNumberArray.push(item);
        }
    }
    var investNumberCount = filterNumberArray.length;
    var investMoney = investNumberCount * 2;
    switch (playMode) {
        case playModeEnumItem.yuan://元模式
            investMoney = investMoney;
            break;
        case playModeEnumItem.jiao://角模式
            investMoney = investMoney / 10;
            break;
        case playModeEnumItem.feng://分模式
            investMoney = investMoney / 100;
            break;
    }
    return investMoney;
};

/**
 *
 * @summary 获取投注之后的当前账户余额
 * @param {String} investNumberString 投注的号码字符
 * @param {Object} playModeEnumItem 玩法模式枚举值
 * @return {Number} 当前账户余额
 * */
profit.prototype.setAccountBalanceAfterInvest = function (investNumberString, playModeEnumItem) {
    if (currentAccountBalance == null) {
        currentAccountBalance = this.userSettings.normalSettings.accountBalance;
    }
    //当前投注金额
    var investMoney = this.getInvestMoney(investNumberString, playModeEnumItem);
    var playMode = this.userSettings.normalSettings.playMode;//玩法模式
    switch (playMode) {
        case playModeEnumItem.yuan://元模式
            currentAccountBalance = currentAccountBalance - investMoney;
            break;
        case playModeEnumItem.jiao://角模式
            currentAccountBalance = (((currentAccountBalance / 10) * 100) - (investMoney * 100)) / 100;
            break;
        case playModeEnumItem.feng://分模式
            currentAccountBalance = (((currentAccountBalance / 100) * 100) - (investMoney * 100)) / 100;
            break;
    }
    //Testing requirement.
    if (this.currentAccountBalance != undefined) {
        this.currentAccountBalance = currentAccountBalance;
    }
};

/**
 *
 * @summary 获取总盈利金额
 * @param {Object} playModeEnumItem 玩法模式枚举值
 * @return {Number} 总盈利金额 正值或者负值
 * */
profit.prototype.getTotalWinMoney = function (playModeEnumItem) {
    if (currentAccountBalance == null) {
        currentAccountBalance = this.userSettings.normalSettings.accountBalance;
    }
    var totalWinMoney = currentAccountBalance - this.userSettings.normalSettings.accountBalance;
    var playMode = this.userSettings.normalSettings.playMode;//玩法模式
    switch (playMode) {
        case playModeEnumItem.yuan://元模式
            totalWinMoney = totalWinMoney;
            break;
        case playModeEnumItem.jiao://角模式
            totalWinMoney = totalWinMoney / 10;
            break;
        case playModeEnumItem.feng://分模式
            totalWinMoney = totalWinMoney / 100;
            break;
    }
    return totalWinMoney;
};

//Testing requirement.
if(module){
    module.exports = profit;
}