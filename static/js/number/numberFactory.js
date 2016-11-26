/**
 *
 *
 * @summary 产生号码投注模块
 * */
function numberFactory(options) {
}

/**
 *
 *
 * @summary 根据上期的中奖号码 产生下一期的投注号码
 * @param {String} LastPrizeNumberString 上期的中奖号码
 * */
numberFactory.prototype.GetInvestNumberString = function (LastPrizeNumberString) {
    var self = this;
    return '2';
};

//Testing requirement.
//if(module){
//    module.exports = numberFactory;
//}