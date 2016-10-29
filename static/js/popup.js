/**
 *
 * @summary popup操作视图
 * */
function popupPage() {
    var self = this;
    //开始按钮
    self.btnStart = function () {
        //TODO:这里添加自己代码
        window.close();
    };
}
var mainView = new popupPage();
ko.applyBindings(mainView);