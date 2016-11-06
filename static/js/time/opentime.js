//Testing requirement.
var nextPeriodInvestTime = require('../global/globalVar.js').nextPeriodInvestTime;
/**
 *
 * @summary 开奖时间类库 类的测试需求：随便传入一个当前时间，就应该返回下期的开奖时间
 * 可测试类库的写法 added test
 * */
var openTime = ((function () {
    function lotteryTime(options) {
        if (options === undefined) {
            var message = 'lotteryTime constructor have 1 argument.';
            console.error(message);
            throw  new SyntaxError(message);
        }
        this.currentTime = options.currentTime;
        //默认延迟开奖时间
        this.openTimeDelaySeconds = options.openTimeDelaySeconds;
        //Testing requirement.
        if (options.nextPeriodInvestTime != null && options.nextPeriodInvestTime != undefined) {
            this.nextPeriodInvestTime = options.nextPeriodInvestTime;
            nextPeriodInvestTime = options.nextPeriodInvestTime;
        }
    }

    /**
     *
     * @summary 是否允许执行投注
     * @return {Boolean} true:允许投注 false:不允许投注
     * */
    lotteryTime.prototype.enableExecInvest = function () {
        if (nextPeriodInvestTime === null) {
            nextPeriodInvestTime = this.getNextOpenTime();
            return true;
        }
        var nextOpenTime = this.getNextOpenTime();
        //未到开奖时间
        if (nextOpenTime.getTime() == nextPeriodInvestTime.getTime()) {
            return false;
        } else {
            nextPeriodInvestTime = nextOpenTime;//更新开奖时间
            //Testing requirement.
            this.nextPeriodInvestTime = nextOpenTime;
            return true;
        }
    };

    /**
     *
     * @summary 下期的开奖时间
     * @return {Date} 下期的开奖时间
     * */
    lotteryTime.prototype.getNextOpenTime = function () {
        var openTimeList = this.getOpenTimeList(this.openTimeDelaySeconds);
        var nextOpenTime = null;
        var minDiffTime = Number.POSITIVE_INFINITY;//最小相差时间
        for (var i = 0; i < openTimeList.length; i++) {
            var currentOpenTime = openTimeList[i];
            if (currentOpenTime > this.currentTime) {//最近的开奖时间
                var currentDiffTime = currentOpenTime.getTime() - this.currentTime.getTime();
                if (currentDiffTime < minDiffTime) {
                    minDiffTime = currentDiffTime;
                    nextOpenTime = currentOpenTime;
                }
            }
        }
        return nextOpenTime;
    };

    /**
     *
     * @summary 开奖时间列表 也是下一期的投注时间
     * @param {Number} delaySeconds 设置延时时间单位为妙
     * @return {Array} 时间数组
     * */
    lotteryTime.prototype.getOpenTimeList = function (delaySeconds) {
        //当天的01:55到10:00
        var year = this.currentTime.getFullYear();
        var month = this.currentTime.getMonth();//month取值 0-11
        var day = this.currentTime.getDate();
        //当天的00:00
        var firstTime = new Date(year, month, day, 0, 0, 00);
        //当天的10:00
        var secondTime = new Date(year, month, day, 10, 00, 00);
        //当天的22:00
        var thirdTime = new Date(year, month, day, 22, 00, 00);
        //第二天10:00
        var fourthTime = new Date(year, month, day + 1, 10, 00, 00);

        var openTimeList = [];
        openTimeList.push(new Date(firstTime.getTime() + delaySeconds * 1000));//当天的00:00
        //00:00-01:55， 共23期
        for (var i = 1; i <= 23; i++) {
            openTimeList.push(new Date(firstTime.getTime() + i * 5 * 60 * 1000 + delaySeconds * 1000));
        }

        //10:00-22:00，共72期
        openTimeList.push(new Date(secondTime.getTime() + delaySeconds * 1000));//当天10:00
        for (var i = 1; i <= 72; i++) {
            openTimeList.push(new Date(secondTime.getTime() + i * 10 * 60 * 1000 + delaySeconds * 1000))
        }

        // 22:00-01:55，共48期
        for (var i = 1; i < 48; i++) {
            openTimeList.push(new Date(thirdTime.getTime() + i * 5 * 60 * 1000 + delaySeconds * 1000))
        }

        //第二天10点
        openTimeList.push(new Date(fourthTime.getTime()) + delaySeconds * 1000);

        return openTimeList;
    };

    //Testing requirement.
    module.exports = lotteryTime;

    return lotteryTime;
})());