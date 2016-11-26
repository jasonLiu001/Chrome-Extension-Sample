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
    //关闭提示框
    $('body > div:nth-child(17) > div:nth-child(4) > span').click();
    //定位胆
    $("#pmrange > li:nth-child(9)").click();
    //个位
    $('#subpms > div > ul > li:nth-child(6)').click();
    //选择分模式
    $('#extra_area > div:nth-child(4) > ul > li:nth-child(4)').click();
    //选号码7
    $('#betarea > div > div > ul > li:nth-child(8)').click();
    //添加到投注
    $('#extra_area > div:nth-child(1) > img').click();
    //确认投注
    $('#bets_list_area > div > div:nth-child(1) > img').click();
};