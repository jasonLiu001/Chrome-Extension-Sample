/**
 *
 * @summary 盈利计算模块 模块设计原则：独立不要有外部依赖,需要的都通过参数传递的方式来完成
 * */
var profit = ((function () {
    function profitMoney(options) {
        //用户设置
        this.userSettings = options.userSettings;
    }

    /**
     *
     * @summary 单次投注中奖后的盈利金额  奖金-本次投注金额=单次盈利金额
     * @param {String} investNumberString 投注的号码字符
     * @param {Object} playModeEnumItem 玩法模式枚举值
     * @return {Number} 盈利金额
     * */
    profitMoney.prototype.winMoney = function (investNumberString, playModeEnumItem) {
        var money = 0;
        var prizeMoney = this.userSettings.normalSettings.prizeMoney;//最大奖金
        var playMode = this.userSettings.normalSettings.playMode;//玩法模式
        var investMoney = this.investMoney(investNumberString, playModeEnumItem);
        switch (playMode) {
            case playModeEnumItem.yuan://元模式
                money = prizeMoney - investMoney;
                break;
            case playModeEnumItem.jiao://角模式
                money = (prizeMoney / 10) - investMoney;
                break;
            case playModeEnumItem.feng://分模式
                money = (prizeMoney / 100) - investMoney;
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
    profitMoney.prototype.investMoney = function (investNumberString, playModeEnumItem) {
        var playMode = this.userSettings.normalSettings.playMode;//玩法模式
        var investNumberCount = investNumberString.trim().split(/[ ,]/);
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

    //design for test
    module.exports = profitMoney;
    return profitMoney;
})());