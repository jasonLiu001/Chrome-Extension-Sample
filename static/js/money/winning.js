;
/**
 *
 * @summary 中奖模块
 * */
var winning = (function () {

    function winningModule() {

    }

    /**
     *
     * @summary 是否可以执行投注
     * */
    winningModule.prototype.enableExecInvest = function (investNumberString, prizeNumberString) {
        var self = this;
        var isWin = self.isWin(investNumberString, prizeNumberString);
        return isWin;
    };

    /**
     *
     * @summary 判定是否中奖
     * @param {String} investNumberString 投注号码
     * @param {String} prizeNumberString 当前中奖号码
     * */
    winningModule.prototype.isWin = function (investNumberString, prizeNumberString) {
        var investNumberArray = investNumberString.trim().split(/[ ,]/);
        var filterNumberArray = [];
        //过滤掉多余空白项
        for (var i = 0; i < investNumberArray.length; i++) {
            var item = investNumberArray[i];
            if (item != '') {
                filterNumberArray.push(item);
            }
        }
        for (var i = 0; i < filterNumberArray.length; i++) {
            var item = filterNumberArray[i];
            if (item == prizeNumberString) {
                return true;
            }
        }
        return false;
    };

    //Testing requirement.
    module.exports = winningModule;
    return winningModule;
})();