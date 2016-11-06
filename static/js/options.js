/**
 *
 * @summary 常规参数设置
 * */
function normalSettings(settings) {
    var self = this;
    //最大盈利
    self.maxWinMoney = ko.observable(settings.maxWinMoney);
    //最大亏损
    self.maxLoseMoney = ko.observable(settings.maxLoseMoney);
    //奖金模式
    self.prizeMoney = ko.observable(settings.prizeMoney);
    //玩法模式
    self.playMode = ko.observable(settings.playMode);
    //账户余额
    self.accountBalance = ko.observable(settings.accountBalance);
}

/**
 *
 * @summary 自动关机参数设置
 * */
function autoShutDownSettings(settings) {
    var self = this;
    //自动关机 最大盈利
    self.autoShutdownPC = ko.observable(settings.autoShutdownPC);
}

/**
 *
 * @summary 提示条
 * */
function promptToolBar() {
    var self = this;
    //是否显示 默认不显示
    self.isShow = ko.observable(false);
    //提示内容
    self.promptText = ko.observable(null);
}

/**
 *
 * @summary option页面视图
 * */
function optionPage(settings) {
    var self = this;
    //提示条
    self.promptToolBar = new promptToolBar();
    //用户自定义设置
    self.userSettings = {
        normalSettings: new normalSettings(settings.normalSettings),
        autoShutDownSettings: new autoShutDownSettings(settings.autoShutDownSettings)
    };
    //显示提示
    self.showAlertMessage = function (text) {
        var promptWindow = self.promptToolBar;
        promptWindow.promptText(text);
        promptWindow.isShow(true);
        setTimeout(function () {
            promptWindow.isShow(false);
        }, 800);
    };
    //保存设置
    self.saveSettings = function () {
        window.userSettings.set(self.userSettings, function () {
            //提示保存结果
            self.showAlertMessage('保存成功！');
        });
    };
    //恢复默认设置
    self.restoreSettings = function () {
        window.userSettings.restore(function () {
            self.showAlertMessage('恢复默认设置成功！请刷新页面！');
        });
    };
    //取消
    self.cancelSaveSettings = function () {
        window.close();
    };
}

$(function () {
    //加载用户设置
    window.userSettings.get(function (optionSettings) {
        var pageView = new optionPage(optionSettings);
        ko.applyBindings(pageView);
    });
});
