;
/**
 *
 * @summary 经纬平台
 * */
function jingweiplatform() {

}


/**
 *
 * @summary 获取上期开奖期号
 * @return {String} 期号 如：20161120-032
 * */
jingweiplatform.prototype.getLastPeriodNumberString = function () {
};

/**
 *
 * @summary 获取上期开奖号码
 * @return {String} 上期开奖号码 如：58903
 * */
jingweiplatform.prototype.getLastPrizeNumberString = function () {
};

/**
 *
 * @summary 获取当前投注期号
 * @return {String} 期号 如：20161120-032
 * */
jingweiplatform.prototype.getCurrentPeriodNumber = function () {
};

/**
 *
 * @summary 执行投注 必须实现的接口方法
 * */
jingweiplatform.prototype.execInvest = function () {
    //$('#kw').val('baidu');
    //$('#su').toggle('click');
};