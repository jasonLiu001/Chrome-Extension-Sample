;
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
     * @summary 获取上期开奖期号
     * @return {String} 期号 如：20161120-032
     * */
    jingweiplatform.prototype.getLastPeriodNumberString = function () {
    };

    /**
     *
     * @summary 获取上期开奖号码
     * @return {String} 上期开奖号码 如：58903
     * */
    jingweiplatform.prototype.getLastPrizeNumberString = function () {
    };

    /**
     *
     * @summary 获取当前投注期号
     * @return {String} 期号 如：20161120-032
     * */
    jingweiplatform.prototype.getCurrentPeriodNumber = function () {
    };

    /**
     *
     * @summary 执行投注
     * */
    jingweiplatform.prototype.execInvest = function () {
        //需要中奖模块暴露出上期投注是否中奖，这样才能为下一步的盈利计算，提供必要的依据
        //判定盈利是否已经到达最大，或者亏损到达最大，停止投注
        //是否到了投注时间，到了则投注，没到时间则继续等待
        //期号和当前要投的期号是否一致，一致投注，不一致则继续等待
        //当前的投注号码获取模块
        //TODO:执行UI自动投注


        alert('ok');
    };

    /**
     *
     * @summary 停止投注
     * */
    jingweiplatform.prototype.stopInvest = function () {
        //TODO:这里添加测试代码
        alert('ok');
    };

    if (window.jingweiplatform === undefined || window.jingweiplatform === null) {
        window.jingweiplatform = new jingweiplatform();
    } else {
        return window.jingweiplatform;
    }
})();