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
    var periodNumber = $('#t_code_sn').text();
    var dateString = moment().format("YYYYMMDD");
    return dateString + '-' + periodNumber;
};

/**
 *
 * @summary 获取当前账户余额
 * @return {Number} 当前账户余额
 * */
jingweiplatform.prototype.getCurrentAccountBalance = function () {
    var accountBalance = $('#t_user_cash').text();
    return parseFloat(accountBalance);
};

/**
 *
 * @summary 获取上期开奖号码
 * @return {Number} 上期开奖号码 如：58903
 * */
jingweiplatform.prototype.getLastPrizeNumber = function () {
    var number = $('#t_code_code').text().split(' ').join('');
    return Number(number);
};

/**
 *
 * @summary 获取当前投注期号
 * @return {String} 期号 如：20161120-032
 * */
jingweiplatform.prototype.getCurrentPeriodNumberString = function () {
    var currentPeriodNumber = $('#t_issue_sn').text();
    var dateString = moment().format("YYYYMMDD");
    return dateString + '-' + currentPeriodNumber;
};

/**
 *
 * @summary 执行投注 必须实现的接口方法
 * @param {String} investNumberString 需要投注的号码
 * */
jingweiplatform.prototype.execInvest = function (investNumberString) {
    //关闭提示框
    $('body > div:nth-child(18) > div:nth-child(4) > span').click();
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