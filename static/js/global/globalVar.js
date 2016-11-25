/**
 *!
 *存储所有全局变量
 * */


/**
 *
 * @summary 下期的投注时间
 * */
var nextPeriodInvestTime = null;
/**
 *
 * @summary 当前账户余额
 * */
var currentAccountBalance = null;
/**
 *
 * @summary 上期投注号码
 * */
var lastInvestNumberString = null;
/**
 *
 * @summary 上期投注期号
 * */
var lastInvestPeriodNumber = null;

//Testing requirement.
if (exports) {
    exports.nextPeriodInvestTime = nextPeriodInvestTime;
    exports.currentAccountBalance = currentAccountBalance;
    exports.lastInvestNumberString = lastInvestNumberString;
    exports.lastInvestPeriodNumber = lastInvestPeriodNumber;
}
