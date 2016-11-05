/**
 *
 * @summary 首次加载插件调用
 * */
chrome.storage.sync.get(null, function (optionSettings) {
    chrome.storage.sync.set($.extend({}, window.defaultSettings, optionSettings));
});

var automationObj = window.uiAutomator;
//step1:设置平台为经纬平台
automationObj.setPlatform(enumPlatformList.jingwei);

/**
 *
 * @summary popup页面 开始任务
 * */
function btnStart() {
    //step2:执行投注
    automationObj.execInvest();
}

/**
 *
 * @summary popup页面 结束任务
 * */
function btnStop() {
    automationObj.stopInvest();
}

