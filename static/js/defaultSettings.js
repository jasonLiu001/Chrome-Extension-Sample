//Ĭ������
var defaultSettings = {
    normalSettings: {
        maxWinMoney: null,
        maxLoseMoney: null
    },
    autoShutDownSettings: {
        autoShutdownPC: 'maxWinMoney'
    }
};
//�����������
chrome.storage.sync.get(null, function (optionSettings) {
    chrome.storage.sync.set($.extend({}, defaultSettings, optionSettings));
});