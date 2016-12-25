/**
 *
 * 检查是否存在注入的元素节点
 * */
var investNumbersContainer = $(body).find('#investNumbersContainer');
if (investNumbersContainer.length == 0) {
    $(body).append('<div id="investNumbersContainer"></div>');
}

/**
 *
 * @summary 获取投注号码
 * */
function getInvestNumberString() {
    var container = $(body).find('#investNumbersContainer');
    console.log(container.text());
}

setInterval(getInvestNumberString(), 2000);