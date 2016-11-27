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
    this.lastPrizeNumberString = options.lastPrizeNumberString;
}

/**
 *
 *
 * @summary 根据上期的中奖号码 产生下一期的投注号码
 * */
numberFactory.prototype.getInvestNumberString = function () {
    var self = this;
    var originalNumberString = '0123456789';
    var first = self.lastPrizeNumberString.charAt(0);
    var second = self.lastPrizeNumberString.charAt(1);
    var third = self.lastPrizeNumberString.charAt(2);
    var forth = self.lastPrizeNumberString.charAt(3);//5
    var fifth = self.lastPrizeNumberString.charAt(4);
    //自身加1

    //根据十位开奖号码，获取下期投注号码
    function getNumberStringForForth(nb) {
        var result = null;
        switch (nb) {
            case 0:
                result='';
                break;
            case 1:
                result='';
                break;
            case 2:
                result='';
                break;
            case 3:
                result='';
                break;
            case 4:
                result='';
                break;
            case 5:
                result='';
                break;
            case 6:
                result='';
                break;
            case 7:
                result='';
                break;
            case 8:
                result='';
                break;
            case 9:
                result='';
                break;
        }
        return result;
    }


};

//Testing requirement.
//if(module){
//    module.exports = numberFactory;
//}