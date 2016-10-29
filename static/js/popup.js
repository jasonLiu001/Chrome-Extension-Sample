/**
 *
 * @summary 主页面视图
 * */
function masterView() {
    var self = this;
    //开始按钮
    self.btnStart = function () {
        window.close();
        alert("It's works! Nice! ");
    };
}
var mainView = new masterView();
ko.applyBindings(mainView);