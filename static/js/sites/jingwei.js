/**
 *
 * @summary 经纬平台
 * */
(function () {
    /**
     *
     * @summary 经纬平台
     * */
    function jingweiplatform() {
    }

    /**
     *
     * @summary 执行投注
     * */
    jingweiplatform.prototype.execInvest = function () {
        //TODO:这里添加测试代码
        alert('ok');
    };

    if (window.jingweiplatform === undefined || window.jingweiplatform === null) {
        window.jingweiplatform = new jingweiplatform();
    } else {
        return window.jingweiplatform;
    }
})();