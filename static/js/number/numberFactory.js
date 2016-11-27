/**
 *
 *
 * @summary 产生号码投注模块
 * */
function numberFactory(options) {
    var self = this;
    if (options === undefined) {
        var message = 'profit constructor have 1 argument.';
        console.error(message);
        throw new SyntaxError(message);
    }
    this.lastPrizeNumber = options.lastPrizeNumber;
}

/**
 *
 *
 * @summary 根据上期的中奖号码 产生下一期的投注号码
 * @return {String} 返回投注号码字符
 * */
numberFactory.prototype.getInvestNumberString = function () {
    var self = this;
    var originalNumberString = '0123456789';
    var first = String(self.lastPrizeNumber).charAt(0);
    var second = String(self.lastPrizeNumber).charAt(1);
    var third = String(self.lastPrizeNumber).charAt(2);
    var forth = String(self.lastPrizeNumber).charAt(3);//5
    var fifth = String(self.lastPrizeNumber).charAt(4);
    //自身加1

    //根据十位开奖号码，获取下期投注号码
    function getNumberString(nb) {
        var result = null;
        switch (nb) {
            case '0':
                result = '2345689';
                break;
            case '1':
                result = '3456789';
                break;
            case '2':
                result = '4567890';
                break;
            case '3':
                result = '2567890';
                break;
            case '4':
                result = '2356789';
                break;
            case '5':
                result = '1237890';
                break;
            case '6':
                result = '1237890';
                break;
            case '7':
                result = '2345890';
                break;
            case '8':
                result = '1234569';
                break;
            case '9':
                result = '0128765';
                break;
        }
        return result;
    }

    return getNumberString(fifth);

};

/**
 *
 * @summary 上期的开奖号码是否满足当前投注条件
 * @return {Boolean} true满足条件 false:不满足条件
 * */
numberFactory.prototype.isNeededPrizeNumber = function () {
    var self = this;
    var first = String(self.lastPrizeNumber).charAt(0);
    var second = String(self.lastPrizeNumber).charAt(1);
    var third = String(self.lastPrizeNumber).charAt(2);
    var forth = String(self.lastPrizeNumber).charAt(3);//5
    var fifth = String(self.lastPrizeNumber).charAt(4);
    if (fifth % 2 == 0) {
        return true;
    }
    return false;

};

//Testing requirement.
//if(module){
//    module.exports = numberFactory;
//}