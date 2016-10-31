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
    //常规设置
    self.normalSettings = new normalSettings(settings.normalSettings);
    //自动关机设置
    self.autoShutDownSettings = new autoShutDownSettings(settings.autoShutDownSettings);
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
        chrome.storage.sync.set({
            normalSettings: {
                maxWinMoney: self.normalSettings.maxWinMoney(),
                maxLoseMoney: self.normalSettings.maxLoseMoney()
            },
            autoShutDownSettings: {
                autoShutdownPC: self.autoShutDownSettings.autoShutdownPC()
            }
        }, function () {
            //提示保存结果
            self.showAlertMessage('保存成功！');
        });
    };
    //恢复默认设置
    self.restoreSettings = function () {
        //插件对应的后台页面
        var backgroundPage=chrome.extension.getBackgroundPage();
        chrome.storage.sync.set(backgroundPage.defaultSettings, function () {
            self.showAlertMessage('恢复默认设置成功！请刷新页面！');
        });
    };
    //取消
    self.cancelSaveSettings = function () {
        window.close();
    };
}

$(function () {
    //获取设置
    chrome.storage.sync.get(null, function (optionSettings) {
        var pageView = new optionPage(optionSettings);
        ko.applyBindings(pageView);
    });

});
