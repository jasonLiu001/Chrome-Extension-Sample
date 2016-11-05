(function () {
    var userSettings = {};

    /**
     *
     * @summary 恢复默认设置
     * */
    userSettings.restore = function (callback) {
        //插件对应的后台页面
        var backgroundPage = chrome.extension.getBackgroundPage();
        chrome.storage.sync.set(backgroundPage.defaultSettings, callback);
    };

    /**
     *
     * @summary 获取用户设定
     * */
    userSettings.get = function (callback) {
        //获取用户设置
        chrome.storage.sync.get(null, callback);
    };

    /**
     *
     * @summary 保存用户自定义设置
     * */
    userSettings.set = function (userSettings, callback) {
        chrome.storage.sync.set({
            normalSettings: {
                maxWinMoney: userSettings.normalSettings.maxWinMoney(),
                maxLoseMoney: userSettings.normalSettings.maxLoseMoney(),
                prizeMoney: userSettings.normalSettings.prizeMoney()
            },
            autoShutDownSettings: {
                autoShutdownPC: userSettings.autoShutDownSettings.autoShutdownPC()
            }
        }, callback);
    };

    if (window.userSettings === undefined) {
        window.userSettings = userSettings;
    } else {
        return window.userSettings;
    }
})();