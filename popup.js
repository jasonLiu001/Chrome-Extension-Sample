/**
 *
 * @summary ��ҳ����ͼ
 * */
function masterView() {
    var self = this;
    self.btnStart = function () {
        window.close();
        alert("It's works! Nice! ");
    };
}
var mainView = new masterView();
ko.applyBindings(mainView);