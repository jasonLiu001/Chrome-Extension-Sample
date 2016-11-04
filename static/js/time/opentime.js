/**
 *
 * @summary ����ʱ����� ��Ĳ���������㴫��һ����ǰʱ�䣬��Ӧ�÷������ڵĿ���ʱ��
 * �ɲ�������д�� added test
 * */
var openTime = ((function () {
    //Ĭ�Ͽ����ӳ�2����
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
     * @summary ���ڵĿ���ʱ��
     * @return {Date} ���ڵĿ���ʱ��
     * */
    lotteryTime.prototype.getNextOpenTime = function () {
        var openTimeList = this.getOpenTimeList(defaultOpenTimeDelaySeconds);
        var nextOpenTime = null;
        for (var i = 0; i < openTimeList.length; i++) {
            var currentOpenTime = openTimeList[i];
            if (currentOpenTime > this.currentTime) {//����Ŀ���ʱ��
                nextOpenTime = currentOpenTime;
                break;
            }
        }
        return nextOpenTime;
    };

    /**
     *
     * @summary ����ʱ���б�
     * @param {Number} delaySeconds ������ʱʱ�䵥λΪ��
     * @return {Array} ʱ������
     * */
    lotteryTime.prototype.getOpenTimeList = function (delaySeconds) {
        //�����01:55��10:00
        var year = this.currentTime.getFullYear();
        var month = this.currentTime.getMonth();
        var day = this.currentTime.getDay();
        //�����10:00
        var secondTime = new Date(year, month, day, 10, 00, 00);
        //�����22:00
        var thirdTime = new Date(year, month, day, 22, 00, 00);

        //10:00-22:00����72��
        var openTimeList = [];
        openTimeList.push(secondTime.getTime());
        for (var i = 1; i <= 72; i++) {
            openTimeList.push(new Date(secondTime.getTime() + i * 10 * 60 * 1000 + delaySeconds))
        }

        // 22:00-01:55����48�� �Ƴ�2������ڣ�2��û��
        for (var i = 1; i < 48; i++) {
            openTimeList.push(new Date(thirdTime.getTime() + i * 5 * 60 * 1000 + delaySeconds))
        }

        return openTimeList;
    };

    return lotteryTime;
})());