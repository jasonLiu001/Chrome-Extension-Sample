(function () {
    var userSettings = {};

    /**
     *
     * @summary �ָ�Ĭ������
     * */
    userSettings.restore = function (callback) {
        //�����Ӧ�ĺ�̨ҳ��
        var backgroundPage = chrome.extension.getBackgroundPage();
        chrome.storage.sync.set(backgroundPage.defaultSettings, callback);
    };

    /**
     *
     * @summary ��ȡ�û��趨
     * */
    userSettings.get = function (callback) {
        //��ȡ�û�����
        chrome.storage.sync.get(null, callback);
    };

    /**
     *
     * @summary �����û��Զ�������
     * */
    userSettings.set = function (userSettings, callback) {
        chrome.storage.sync.set({
            normalSettings: {
                maxWinMoney: userSettings.normalSettings.maxWinMoney(),
                maxLoseMoney: userSettings.normalSettings.maxLoseMoney()
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