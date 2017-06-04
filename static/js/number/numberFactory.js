/**
 *
 *
 * @summary 产生号码投注模块
 * */
function numberFactory(options) {
    var self = this;
    if (options === undefined) {
        var message = 'profit constructor have 1 argument.';
        console.error(message);
        throw new SyntaxError(message);
    }
    //上期开奖号码
    this.lastPrizeNumberString = options.lastPrizeNumberString;
    //上期期号
    this.lastPeriodNumberString = options.lastPeriodNumberString;
}


/**
 *
 *
 * @summary 根据上期的中奖号码 产生下一期的投注号码 后三
 * @return {String} 返回投注号码字符
 * */
numberFactory.prototype.getInvestNumberString = function () {
    var self = this;

    /**
     * 完整后三完整1000注
     * */
    function getTotalNumberArray() {
        var a = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], b = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        c = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        var totalArray = [];
        for (var i = 0; i < a.length; i++) {
            for (var j = 0; j < b.length; j++) {
                for (var k = 0; k < c.length; k++) {
                    totalArray.push(a[i] + '' + b[j] + '' + c[k]);
                }
            }
        }
        return totalArray;
    }


    //开奖号码信息
    var prizeFirst = Number(self.lastPrizeNumberString.charAt(0));
    var prizeSecond = Number(self.lastPrizeNumberString.charAt(1));
    var prizeThird = Number(self.lastPrizeNumberString.charAt(2));
    var prizeForth = Number(self.lastPrizeNumberString.charAt(3));//5
    var prizeFifth = Number(self.lastPrizeNumberString.charAt(4));
    var totalNumberArray = getTotalNumberArray();
    //后三定弹
    var firstFilterArray = [];
    for (var i = 0; i < totalNumberArray.length; i++) {
        var item = totalNumberArray[i];

        if (prizeThird == 0 || prizeForth == 0 || prizeFifth == 0) {
            if (item.indexOf("0") > -1 || item.indexOf("4") > -1 || item.indexOf("2") > -1) {
                firstFilterArray.push(item);
            }
        } else if (prizeThird == 1 || prizeForth == 1 || prizeFifth == 1) {
            if (item.indexOf("2") > -1 || item.indexOf("4") > -1 || item.indexOf("6") > -1) {
                firstFilterArray.push(item);
            }
        } else if (prizeThird == 2 || prizeForth == 2 || prizeFifth == 2) {
            if (item.indexOf("1") > -1 || item.indexOf("3") > -1 || item.indexOf("7") > -1) {
                firstFilterArray.push(item);
            }
        } else if (prizeThird == 3 || prizeForth == 3 || prizeFifth == 3) {
            if (item.indexOf("0") > -1 || item.indexOf("3") > -1 || item.indexOf("6") > -1) {
                firstFilterArray.push(item);
            }
        } else if (prizeThird == 4 || prizeForth == 4 || prizeFifth == 4) {
            if (item.indexOf("2") > -1 || item.indexOf("6") > -1 || item.indexOf("8") > -1) {
                firstFilterArray.push(item);
            }
        } else if (prizeThird == 5 || prizeForth == 5 || prizeFifth == 5) {
            if (item.indexOf("1") > -1 || item.indexOf("3") > -1 || item.indexOf("7") > -1) {
                firstFilterArray.push(item);
            }
        } else if (prizeThird == 6 || prizeForth == 6 || prizeFifth == 6) {
            if (item.indexOf("2") > -1 || item.indexOf("4") > -1 || item.indexOf("8") > -1) {
                firstFilterArray.push(item);
            }
        } else if (prizeThird == 7 || prizeForth == 7 || prizeFifth == 7) {
            if (item.indexOf("3") > -1 || item.indexOf("1") > -1 || item.indexOf("5") > -1) {
                firstFilterArray.push(item);
            }
        } else if (prizeThird == 8 || prizeForth == 8 || prizeFifth == 8) {
            if (item.indexOf("2") > -1 || item.indexOf("3") > -1 || item.indexOf("6") > -1) {
                firstFilterArray.push(item);
            }
        } else if (prizeThird == 9 || prizeForth == 9 || prizeFifth == 9) {
            if (item.indexOf("0") > -1 || item.indexOf("3") > -1 || item.indexOf("6") > -1) {
                firstFilterArray.push(item);
            }
        }

    }

    return firstFilterArray.join(' ');
};

/**
 *
 *
 * @summary 根据上期的中奖号码 产生下一期的投注号码 后二
 * @return {String} 返回投注号码字符
 * */
numberFactory.prototype.getInvestNumberString_old_02 = function () {
    var self = this;

    /**
     * 完整后二100注
     * */
    function getTotalNumberArray() {
        var a = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], b = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        var totalArray = [];
        for (var i = 0; i < a.length; i++) {
            for (var j = 0; j < b.length; j++) {
                totalArray.push(a[i] + '' + b[j]);
            }
        }
        return totalArray;
    }

    //开奖号码信息
    var prizeFirst = Number(self.lastPrizeNumberString.charAt(0));
    var prizeSecond = Number(self.lastPrizeNumberString.charAt(1));
    var prizeThird = Number(self.lastPrizeNumberString.charAt(2));
    var prizeForth = Number(self.lastPrizeNumberString.charAt(3));//5
    var prizeFifth = Number(self.lastPrizeNumberString.charAt(4));
    //开奖期号信息
    var periodFirst = Number(self.lastPeriodNumberString.charAt(0));
    var periodSecond = Number(self.lastPeriodNumberString.charAt(1));
    var periodThird = Number(self.lastPeriodNumberString.charAt(2));
    var totalNumberArray = getTotalNumberArray();

    //后二杀号
    var firstFilterArray = [];
    //0杀158
    var cut_0 = '158';
    //1杀269
    var cut_1 = '269';
    var cut_2 = '370';
    var cut_3 = '481';
    var cut_4 = '592';
    var cut_5 = '603';
    var cut_6 = '714';
    var cut_7 = '825';
    var cut_8 = '930';
    var cut_9 = '847';

    for (var i = 0; i < totalNumberArray.length; i++) {
        var item = totalNumberArray[i];

        var first = item.charAt(0);
        var second = item.charAt(1);
        switch (prizeForth) {//杀十位
            case 0:
            {
                if (cut_0.indexOf(first) > -1) {
                    continue;
                }
            }
                break;
            case 1:
            {
                if (cut_1.indexOf(first) > -1) {
                    continue;
                }
            }
                break;
            case 2:
            {
                if (cut_2.indexOf(first) > -1) {
                    continue;
                }
            }
                break;
            case 3:
            {
                if (cut_3.indexOf(first) > -1) {
                    continue;
                }
            }
                break;
            case 4:
            {
                if (cut_4.indexOf(first) > -1) {
                    continue;
                }
            }
                break;
            case 5:
            {
                if (cut_5.indexOf(first) > -1) {
                    continue;
                }
            }
                break;
            case 6:
            {
                if (cut_6.indexOf(first) > -1) {
                    continue;
                }
            }
                break;
            case 7:
            {
                if (cut_7.indexOf(first) > -1) {
                    continue;
                }
            }
                break;
            case 8:
            {
                if (cut_8.indexOf(first) > -1) {
                    continue;
                }
            }
                break;
            case 9:
            {
                if (cut_9.indexOf(first) > -1) {
                    continue;
                }
            }
                break;
        }

        switch (prizeFifth) {//杀个位
            case 0:
            {
                if (cut_0.indexOf(second) > -1) {
                    continue;
                }
            }
                break;
            case 1:
            {
                if (cut_1.indexOf(second) > -1) {
                    continue;
                }
            }
                break;
            case 2:
            {
                if (cut_2.indexOf(second) > -1) {
                    continue;
                }
            }
                break;
            case 3:
            {
                if (cut_3.indexOf(second) > -1) {
                    continue;
                }
            }
                break;
            case 4:
            {
                if (cut_4.indexOf(second) > -1) {
                    continue;
                }
            }
                break;
            case 5:
            {
                if (cut_5.indexOf(second) > -1) {
                    continue;
                }
            }
                break;
            case 6:
            {
                if (cut_6.indexOf(second) > -1) {
                    continue;
                }
            }
                break;
            case 7:
            {
                if (cut_7.indexOf(second) > -1) {
                    continue;
                }
            }
                break;
            case 8:
            {
                if (cut_8.indexOf(second) > -1) {
                    continue;
                }
            }
                break;
            case 9:
            {
                if (cut_9.indexOf(second) > -1) {
                    continue;
                }
            }
                break;
        }


        firstFilterArray.push(item);
    }
    return firstFilterArray.join(' ');
};

/**
 *
 *
 * @summary 根据上期的中奖号码 产生下一期的投注号码  后二
 * @return {String} 返回投注号码字符
 * */
numberFactory.prototype.getInvestNumberString_old_01 = function () {
    var self = this;

    /**
     * 完整后二100注
     * */
    function getTotalNumberArray() {
        var a = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], b = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        var totalArray = [];
        for (var i = 0; i < a.length; i++) {
            for (var j = 0; j < b.length; j++) {
                totalArray.push(a[i] + '' + b[j]);
            }
        }
        return totalArray;
    }

    /**
     *
     * 获取号码的0,1,2路类型
     * */
    function getNumber012Type(num) {
        var restNumber = num % 3;
        return restNumber;
    }

    /**
     *
     * 获取号码的奇偶属性 0:偶数，1，基数
     * */
    function getJiEouType(num) {
        var restNumber = num % 2;
        return restNumber;
    }


    //开奖号码信息
    var prizeFirst = Number(self.lastPrizeNumberString.charAt(0));
    var prizeSecond = Number(self.lastPrizeNumberString.charAt(1));
    var prizeThird = Number(self.lastPrizeNumberString.charAt(2));
    var prizeForth = Number(self.lastPrizeNumberString.charAt(3));//5
    var prizeFifth = Number(self.lastPrizeNumberString.charAt(4));
    //开奖期号信息
    var periodFirst = Number(self.lastPeriodNumberString.charAt(0));
    var periodSecond = Number(self.lastPeriodNumberString.charAt(1));
    var periodThird = Number(self.lastPeriodNumberString.charAt(2));
    var totalNumberArray = getTotalNumberArray();
    //杀十位个位和
    var sum = prizeForth + prizeFifth;
    var firstFilterArray = [];
    for (var i = 0; i < totalNumberArray.length; i++) {
        var item = totalNumberArray[i];
        var first = Number(item.charAt(0));
        var second = Number(item.charAt(1));
        if ((first + second) == sum) {
            continue;
        }
        firstFilterArray.push(item);
    }
    //杀跨度
    var secondFilterArray = [];
    var betweenValue = Math.abs(prizeForth - prizeFifth);
    for (var i = 0; i < firstFilterArray.length; i++) {
        var item = firstFilterArray[i];
        var first = Number(item.charAt(0));
        var second = Number(item.charAt(1));
        if (betweenValue == Math.abs(first - second)) {
            continue;
        }
        secondFilterArray.push(item);
    }
    //十位杀千位 个位万位
    var thirdFilterArray = [];
    for (var i = 0; i < secondFilterArray.length; i++) {
        var item = secondFilterArray[i];
        var first = Number(item.charAt(0));
        var second = Number(item.charAt(1));
        if (prizeSecond == first || prizeFirst == second) {
            continue;
        }
        thirdFilterArray.push(item);
    }
    //当前号码的奇偶属性
    var forthFilterArray = [];
    //上期开奖号码后二奇偶 倒杀
    var shiWeiJiOuType = getJiEouType(prizeForth);//十位奇偶类型
    var geWeiJiOuType = getJiEouType(prizeFifth);//个位奇偶类型
    for (var i = 0; i < thirdFilterArray.length; i++) {
        var item = secondFilterArray[i];
        var firstJiEouType = getJiEouType(Number(item.charAt(0)));
        var secondJiEouType = getJiEouType(Number(item.charAt(1)));
        var JiOu = firstJiEouType + '' + secondJiEouType;
        switch (JiOu) {
            case '00'://偶偶 杀奇奇
            {
                if (shiWeiJiOuType == 1 && geWeiJiOuType == 1) {
                    continue;
                }
            }
                break;
            case '11'://奇奇 杀偶偶
            {
                if (shiWeiJiOuType == 0 && geWeiJiOuType == 0) {
                    continue;
                }
            }
                break;
            case '01'://偶奇 杀奇偶
            {
                if (shiWeiJiOuType == 1 && geWeiJiOuType == 0) {
                    continue;
                }
            }
                break;
            case '10'://奇偶 杀偶奇
            {
                if (shiWeiJiOuType == 0 && geWeiJiOuType == 1) {
                    continue;
                }
            }
                break;
        }
        forthFilterArray.push(item);
    }


    return forthFilterArray.join(' ');

};

/**
 *
 * @summary 上期的开奖号码是否满足当前投注条件
 * @return {Boolean} true满足条件 false:不满足条件
 * */
numberFactory.prototype.isNeededPrizeNumber = function () {
    var self = this;
    var first = Number(self.lastPrizeNumberString.charAt(0));
    var second = Number(self.lastPrizeNumberString.charAt(1));
    var third = Number(self.lastPrizeNumberString.charAt(2));
    var forth = Number(self.lastPrizeNumberString.charAt(3));//5
    var fifth = Number(self.lastPrizeNumberString.charAt(4));
    return true;

};

//Testing requirement.
//if(module){
//    module.exports = numberFactory;
//}