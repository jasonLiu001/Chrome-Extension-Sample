//Testing requirement.
var lastInvestNumberString = require('../global/globalVar.js').lastInvestNumberString;
//Testing requirement.
var lastInvestPeriodNumber = require('../global/globalVar.js').lastInvestPeriodNumber;

/**
 *
 * @summary 中奖模块
 * */
var winning = ((function () {

    function winningModule() {

    }

    /**
     *
     * @summary 判定是否中奖
     * */
    winningModule.prototype.isWin = function () {
    };

    //Testing requirement.
    module.exports = winningModule;
    return winningModule;
})());