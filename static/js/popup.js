/**
 *
 * @summary popup操作视图
 * */
function popupPage() {
    var self = this;
    //开始按钮
    self.btnStart = function () {
        var backgroundPage = chrome.extension.getBackgroundPage();
        backgroundPage.btnStart();
        window.close();
    };
    //停止按钮
    self.btnStop = function () {
        var backgroundPage = chrome.extension.getBackgroundPage();
        backgroundPage.btnStop();
        window.close();
    };
}
var mainView = new popupPage();
ko.applyBindings(mainView);