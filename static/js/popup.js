/**
 *
 * @summary popup操作视图
 * */
function popupPage() {
    var self = this;
    //开始按钮
    self.btnStart = function () {
        //TODO:开始任务
        window.close();
    };
    //停止按钮
    self.btnStop=function(){
        //TODO:停止任务
    };
}
var mainView = new popupPage();
ko.applyBindings(mainView);