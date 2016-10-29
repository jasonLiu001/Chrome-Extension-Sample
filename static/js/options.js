/**
 *
 * @summary option页面视图
 * */
function optionPage() {
    var self = this;
    //保存设置
    this.saveSettings = function () {
        //TODO:添加保存参数代码
    };
}

var pageView = new optionPage();
ko.applyBindings(pageView);