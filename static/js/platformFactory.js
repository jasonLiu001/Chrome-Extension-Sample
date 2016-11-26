/**
 *
 * @summary 平台自动化入口  该类是程序的入口类  按照方法上的步骤step序号来调用
 * */
function platformFactory() {
    this.platForm = null;
}

/**
 *
 * @summary Step1: 设置平台
 * */
platformFactory.prototype.setPlatform = function (platformName) {
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
platformFactory.prototype.execInvest = function () {
    this.implementVerify(this.platForm.execInvest, 'execInvest');
    this.platForm.execInvest();
};

/**
 *
 * @summary 停止自动投注
 * */
platformFactory.prototype.stopInvest = function () {
    this.implementVerify(this.platForm.stopInvest, 'stopInvest');
    this.platForm.stopInvest();
};

/**
 *
 * @summary 检查方法默认实现
 * */
platformFactory.prototype.implementVerify = function (func, funcName) {
    if (this.platForm === null) {
        console.error('The property platForm is null, should use \'setPlatform\' to define a platform first. ');
    }

    if (!(func && typeof (func) === 'function')) {
        console.error('The platform must implement the method \'' + funcName + '\'.');
    }
};

/**
 *
 * @summary 初始化自动投注对象，初始化完成后，需要立即调用方法=>setPlatform
 * setPlatform => 用来设置实际投注的平台，如果平台发生改变，需要改变该方法中调用的枚举值
 * */
var automationObj = new platformFactory();
//【必须】首先设置平台为经纬平台，或者为其他平台
automationObj.setPlatform(enumPlatformList.jingwei);