/**
 *
 * @summary 平台自动化入口 按照方法上的步骤step序号来调用
 * */
function uiAutomator() {
    this.platForm = null;
}

/**
 *
 * @summary Step1: 设置平台
 * */
uiAutomator.prototype.setPlatform = function (platformName) {
    switch (platformName) {
        case window.enumPlatformList.jingwei://经纬平台
            this.platForm = new jingweiplatform();
            break;
        default :
            this.platForm = new jingweiplatform();
            break;
    }
};

/**
 *
 * @summary step 2: 执行自动化投注入口方法
 * */
uiAutomator.prototype.execInvest = function () {
    this.implementVerify(this.platForm.execInvest, 'execInvest');
    this.platForm.execInvest();
};

/**
 *
 * @summary 停止自动投注
 * */
uiAutomator.prototype.stopInvest = function () {
    this.implementVerify(this.platForm.stopInvest, 'stopInvest');
    this.platForm.stopInvest();
};

/**
 *
 * @summary 检查方法默认实现
 * */
uiAutomator.prototype.implementVerify = function (func, funcName) {
    if (this.platForm === null) {
        console.error('The property platForm is null, should use \'setPlatform\' to define a platform first. ');
    }

    if (!(func && typeof (func) === 'function')) {
        console.error('The platform must implement the method \'' + funcName + '\'.');
    }
};