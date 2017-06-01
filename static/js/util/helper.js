/**
 *
 * @summary 公共类
 *
 * */
function Helper() {

}

/**
 *
 * @summary 后三1000组号码
 * @param {String} numStr 需要产生号码的号码字符 格式：'0123456789'
 * */
Helper.prototype.GetThreeTotalNumberArray = function (numStr) {
    var numArr = [];
    for (var i = 0; i < numStr.length; i++) {
        var first = numStr[i];
        for (var j = 0; j < numStr.length; j++) {
            var second = numStr[j];
            for (var k = 0; k < numStr.length; k++) {
                var third = numStr[k];
                numArr.push(first + '' + second + '' + third);
            }
        }
    }
    return numArr;
};