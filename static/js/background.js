/**
 *
 * @summary 首次加载插件调用
 * */
chrome.storage.sync.get(null, function (optionSettings) {
    chrome.storage.sync.set($.extend({}, window.defaultSettings, optionSettings));
});

/**
 *
 * @summary 初始化自动投注对象，初始化完成后，需要立即调用方法=>setPlatform
 * setPlatform => 用来设置实际投注的平台，如果平台发生改变，需要改变该方法中调用的枚举值
 * */
var automationObj = new uiAutomator();
//【必须】首先设置平台为经纬平台，或者为其他平台
automationObj.setPlatform(enumPlatformList.jingwei);

/**
 *
 * @summary popup页面 开始任务
 * */
function btnStart() {
    //调用投注对象的执行投注
    automationObj.execInvest();
}

/**
 *
 * @summary popup页面 结束任务
 * */
function btnStop() {
    automationObj.stopInvest();
}

