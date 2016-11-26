/**
 *
 * @summary 首次加载插件调用
 * */
chrome.storage.sync.get(null, function (optionSettings) {
    chrome.storage.sync.set($.extend({}, window.defaultSettings, optionSettings));
});

/**
 *
 * @summary popup页面 开始任务
 * */
function btnStart() {
    setInterval(function () {
        chrome.tabs.executeScript({code: 'automationObj.execInvest();'});
    }, 5000);
}

/**
 *
 * @summary popup页面 结束任务
 * */
function btnStop() {
    chrome.tabs.executeScript({code: 'automationObj.stopInvest();'});
}

