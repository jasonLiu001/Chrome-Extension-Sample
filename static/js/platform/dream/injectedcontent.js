/**
 *
 * @summary 获取投注号码
 * */
function getInvestNumberString() {
    var container = $('#investNumbersContainer');
    var investNumberString = container.text();
    if (investNumberString != '') {
        //清空号码
        container.text();
        //投注
        ViewModel.textForm(investNumberString);
        $('#bet-confirm').click();
    } else {
        return;
    }
}

/**
 *
 * 检查是否存在注入的元素节点
 * */
$(function () {
    var investNumbersContainer = $(document.body).find('#investNumbersContainer');
    if (investNumbersContainer.length == 0) {
        $(document.body).append('<div id="investNumbersContainer"></div>');
    }
    setInterval(function () {
        getInvestNumberString();
    }, 5000);
});
