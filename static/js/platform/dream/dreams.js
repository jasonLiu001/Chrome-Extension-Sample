;
/**
 *
 * @summary 梦之城
 * */
function CityOfDreamsPlatForm() {

}


/**
 *
 * @summary 获取上期期号
 * @return {String} 期号 如：20161120-032
 * */
CityOfDreamsPlatForm.prototype.getLastPeriodNumberString = function () {
    var periodString = $(window.frames["mainFrame"].document).find('#lastissue').text();
    var periodNumber = periodString.substring(8);
    var dateString = moment().format("YYYYMMDD");
    return dateString + '-' + periodNumber;
};

/**
 *
 * @summary 获取当前期号
 * @return {String} 期号 如：20161120-032
 * */
CityOfDreamsPlatForm.prototype.getCurrentPeriodNumberString = function () {
    var currentString = $(window.frames["mainFrame"].document).find('#curissue').text();
    var currentPeriodNumber = currentString.substr(10, 3);
    var dateString = moment().format("YYYYMMDD");
    return dateString + '-' + currentPeriodNumber;
};

/**
 *
 * @summary 获取当前账户余额
 * @return {Number} 当前账户余额
 * */
CityOfDreamsPlatForm.prototype.getCurrentAccountBalance = function () {
    var displayValue = $('#NoneDisplayAmount').css("display");
    if (displayValue == 'inline') {//隐藏余额时，点击显示余额
        $(window.document).find('#EnableAmount')[0].click();
    }
    //刷新余额
    $(window.document).find('#refreshwallet').click();
    var accountBalance = $(window.document).find('#walletamount').text();
    return parseFloat(accountBalance);
};

/**
 *
 * @summary 获取上期开奖号码
 * @return {Number} 上期开奖号码 如：58903
 * */
CityOfDreamsPlatForm.prototype.getLastPrizeNumber = function () {
    var one = $(window.frames["mainFrame"].document).find('#lastdigit1').text();
    var two = $(window.frames["mainFrame"].document).find('#lastdigit2').text();
    var three = $(window.frames["mainFrame"].document).find('#lastdigit3').text();
    var four = $(window.frames["mainFrame"].document).find('#lastdigit4').text();
    var five = $(window.frames["mainFrame"].document).find('#lastdigit5').text();
    var number = one + '' + two + '' + three + '' + four + '' + five;
    return Number(number);
};

/**
 *
 * @summary 执行投注 必须实现的接口方法
 * @param {String} investNumberString 需要投注的号码
 * */
CityOfDreamsPlatForm.prototype.execInvest = function (investNumberString) {
    var self = this;
    //后二直选投注
    self.houErZhiXuanInvest(investNumberString);
};

/**
 *
 * 后二直选投注
 * */
CityOfDreamsPlatForm.prototype.houErZhiXuanInvest = function (investNumberString) {
    //输入号码 配合注入的脚本来完成自动投注，通过下面给页面中特定的节点来赋值
    $(window.frames["mainFrame"].document).find('#investNumbersContainer').text(22);
    //因为该平台使用的是knockout加iframe的形式，所以号码投注的部分使用injectedcontent.js中方法来完成
};