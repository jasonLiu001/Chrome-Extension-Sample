;
/**
 *
 * @summary 中奖模块 可以判断是否中奖 是否可以继续投注
 * */
function winning() {

}

/**
 *
 * @summary 是否可以执行投注
 * */
winning.prototype.enableExecInvest = function (investNumberString, prizeNumberString) {
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
winning.prototype.isWin = function (investNumberString, prizeNumberString) {
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
//if (module != undefined) {
//    module.exports = winning;
//}