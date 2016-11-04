/**
 *
 * @summary 开奖时间类库 类的测试需求：随便传入一个当前时间，就应该返回下期的开奖时间
 * 可测试类库的写法 added test
 * */
var openTime = ((function () {
    //默认开奖延迟2分钟
    var defaultOpenTimeDelaySeconds = 120;

    function lotteryTime(options) {
        if (options === undefined) {
            var message = 'lotteryTime constructor have 1 argument.';
            console.error(message);
            throw  new SyntaxError(message);
        }
        this.currentTime = options.currentTime;
    }

    /**
     *
     * @summary 下期的开奖时间
     * @return {Date} 下期的开奖时间
     * */
    lotteryTime.prototype.getNextOpenTime = function () {
        var openTimeList = this.getOpenTimeList(defaultOpenTimeDelaySeconds);
        var nextOpenTime = null;
        for (var i = 0; i < openTimeList.length; i++) {
            var currentOpenTime = openTimeList[i];
            if (currentOpenTime > this.currentTime) {//最近的开奖时间
                nextOpenTime = currentOpenTime;
                break;
            }
        }
        return nextOpenTime;
    };

    /**
     *
     * @summary 开奖时间列表
     * @param {Number} delaySeconds 设置延时时间单位为妙
     * @return {Array} 时间数组
     * */
    lotteryTime.prototype.getOpenTimeList = function (delaySeconds) {
        //当天的01:55到10:00
        var year = this.currentTime.getFullYear();
        var month = this.currentTime.getMonth();
        var day = this.currentTime.getDay();
        //当天的10:00
        var secondTime = new Date(year, month, day, 10, 00, 00);
        //当天的22:00
        var thirdTime = new Date(year, month, day, 22, 00, 00);

        //10:00-22:00，共72期
        var openTimeList = [];
        openTimeList.push(secondTime.getTime());
        for (var i = 1; i <= 72; i++) {
            openTimeList.push(new Date(secondTime.getTime() + i * 10 * 60 * 1000 + delaySeconds))
        }

        // 22:00-01:55，共48期 移除2点的那期，2点没有
        for (var i = 1; i < 48; i++) {
            openTimeList.push(new Date(thirdTime.getTime() + i * 5 * 60 * 1000 + delaySeconds))
        }

        return openTimeList;
    };

    return lotteryTime;
})());