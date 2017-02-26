/**
 *
 * @summary 存储投注号码容器
 * */
var investNumbersContainer = 'investNumbersContainer';

/**
 *
 * @summary 后二投注
 * */
function houErZhiXuanInvest(investNumberString) {
    //后二
    $('#Bet > table > tbody > tr:nth-child(2) > td > div:nth-child(1) > div.tabpanelBox > ul > li:nth-child(7) > a')[0].click();
    //分模式
    //$('#Unit2c > label')[0].click();
    //角模式
    $('#Unit2d > label')[0].click();
    //后二直选
    $('#NumberPositionMatchForL2StarSingle')[0].click();
    //点击清空号码
    $('#text-form > td > div > div.col-md-8 > button:nth-child(2)')[0].click();
    $('#betNumber-placeholder')[0].click();
    //输入号码
    viewModel.textForm(investNumberString);
    //计算投注金额
    viewModel.resetSingleSum();
    //投注
    $('#bet-confirm')[0].click();
}

/**
 *
 * @summary 后三直选
 * */
function houSanZhiXuanInvest(investNumberString){
    //后三
    $('#Bet > table > tbody > tr:nth-child(2) > td > div:nth-child(1) > div.tabpanelBox > ul > li.bettype-button-list.active > a')[0].click();
    //分模式
    //$('#Unit2c > label')[0].click();
    //厘模式
    $('#Unit2m > label')[0].click();
    //后三直选
    $('#NumberPositionMatchForL3StarSingle')[0].click();
    //点击清空号码
    $('#text-form > td > div > div.col-md-8 > button:nth-child(2)')[0].click();
    $('#betNumber-placeholder')[0].click();
    //输入号码
    viewModel.textForm(investNumberString);
    //计算投注金额
    viewModel.resetSingleSum();
    //投注
    $('#bet-confirm')[0].click();
}

/**
 *
 * @summary 获取投注号码
 * */
function getInvestNumberString() {
    var container = $('#' + investNumbersContainer);
    var investNumberString = container.text();
    if (investNumberString != '') {
        //清空号码
        viewModel.textForm('');
        container.text('');
        //后二投注
        //houErZhiXuanInvest(investNumberString);
        //后三直选投注
        houSanZhiXuanInvest(investNumberString);
    } else {
        return;
    }
}

/**
 *
 * 检查是否存在注入的元素节点
 * */
$(function () {
    var container = $(document.body).find('#' + investNumbersContainer);
    if (container.length == 0) {
        $(document.body).append('<div id="' + investNumbersContainer + '"></div>');
    }
    setInterval(function () {
        getInvestNumberString();
    }, 5000);
});
