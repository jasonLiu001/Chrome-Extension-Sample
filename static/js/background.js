/**
 *
 * @summary 首次加载插件调用
 * */
chrome.storage.sync.get(null, function (optionSettings) {
    chrome.storage.sync.set($.extend({}, window.defaultSettings, optionSettings));
});

/**
 *
 * @summary popup页面中的按钮点击 响应事件
 *          在background中通过api方法chrome.tabs.executeScript来调用ContentScript中的方法
 * */
function btnStart() {
    chrome.tabs.executeScript({code: 'appmain.execInvest();'});
}

/**
 *
 * @summary popup页面中的按钮点击 响应事件
 *          background中通过api方法chrome.tabs.executeScript来调用ContentScript中的方法
 * */
function btnStop() {
    chrome.tabs.executeScript({code: 'appmain.stopInvest();'});
}

