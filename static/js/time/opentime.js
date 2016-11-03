/**
 *
 * @summary 开奖时间类库 类的测试需求：随便传入一个当前时间，就应该返回下期的开奖时间
 * 虽然当前时间可以直接在方法中获取，但是为了适应测试类的要求，还是需要将当前时间做为参数来传递进去
 * */
var openTime = ((function () {
    //默认开奖延迟2分钟
    var defaultOpenTimeDelaySeconds = 120;

    function lotteryTime() {
    }

    /**
     *
     * @summary 下期的开奖时间
     * @param {Date} currentTime 当前时间
     * @return {Date} 下期的开奖时间
     * */
    lotteryTime.prototype.getNextOpenTime = function (currentTime) {
        var openTimeList = this.getOpenTimeList(currentTime, defaultOpenTimeDelaySeconds);
        var nextOpenTime = null;
        for (var i = 0; i < openTimeList.length; i++) {
            var currentOpenTime = openTimeList[i];
            if (currentOpenTime > currentTime) {//最近的开奖时间
                nextOpenTime = currentOpenTime;
                break;
            }
        }
        return nextOpenTime;
    };

    /**
     *
     * @summary 开奖时间列表
     * @param {Date} currentTime 当前系统时间
     * @param {Number} delaySeconds 设置延时时间单位为妙
     * @return {Array} 时间数组
     * */
    lotteryTime.prototype.getOpenTimeList = function (currentTime, delaySeconds) {
        //当天的01:55到10:00
        var year = currentTime.getFullYear();
        var month = currentTime.getMonth();
        var day = currentTime.getDay();
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

    return new lotteryTime();
})());