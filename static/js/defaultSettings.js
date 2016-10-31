//默认设置
var defaultSettings = {
    normalSettings: {
        maxWinMoney: null,
        maxLoseMoney: null
    },
    autoShutDownSettings: {
        autoShutdownPC: 'maxWinMoney'
    }
};
//启动插件调用
chrome.storage.sync.get(null, function (optionSettings) {
    chrome.storage.sync.set($.extend({}, defaultSettings, optionSettings));
});