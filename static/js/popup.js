/**
 *
 * @summary popup页面按钮类型
 * */
var popupActionType = {
    btnStart: 'start',
    btnStop: 'stop'
};

/**
 *
 * @summary 执行按钮操作
 * */
function executeAction(currentActionType) {
    var backgroundPage = chrome.extension.getBackgroundPage();
    window.close();
    switch (currentActionType) {
        case popupActionType.btnStart:
            backgroundPage.btnStart();
            break;
        case popupActionType.btnStop:
            backgroundPage.btnStop();
            break;
    }
}

/**
 *
 * @summary popup操作视图
 * */
function popupPage() {
    var self = this;
    //开始按钮
    self.btnStart = function () {
        executeAction(popupActionType.btnStart);
    };
    //停止按钮
    self.btnStop = function () {
        executeAction(popupActionType.btnStop);
    };
}
var mainView = new popupPage();
ko.applyBindings(mainView);