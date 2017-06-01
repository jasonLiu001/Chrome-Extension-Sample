/**
 *
 * @summary 三星断组
 * */

function NumberBroken() {
}

/**
 *
 *
 * */
NumberBroken.prototype.Helper = {
    /**
     *
     *
     * @summary 根据传入的号码产生后三号码数组
     * @param {String} group 需要产生号码的号码字符 格式：'0123456789'
     * @return {Array} 返回号码数组
     * */
    getTotalNumberArrayByOneGroupNumber: function (group) {
        var numArr = [];
        for (var i = 0; i < group.length; i++) {
            var first = group[i];
            for (var j = 0; j < group.length; j++) {
                var second = group[j];
                for (var k = 0; k < group.length; k++) {
                    var third = group[k];
                    numArr.push(first + '' + second + '' + third);
                }
            }
        }
        return numArr;
    },
    /**
     *
     * @summary 根据三组号码产生后三号码
     * @param {String} group1 第一组号码
     * @param {String} group2 第二组号码
     * @param {String} group3 第三组号码
     * @return {Array} 返回号码数组
     * */
    getTotalNumberArrayByThreeGroupNumber: function (group1, group2, group3) {
        var numberArr = [];
        for (var i = 0; i < group1.length; i++) {
            var first = group1[i];
            for (var j = 0; j < group2.length; j++) {
                var second = group2[j];
                for (var k = 0; k < group3.length; k++) {
                    var third = group3[k];
                    numberArr.push(first + '' + second + '' + third);
                }
            }
        }
        return numberArr;
    },
    /**
     *
     * @summary 获取未选择的号码
     * @param {Array} brokenNumberArray 断组号码数组
     * @return {Array} 返回未选择的号码
     * */
    getUnselectedNumberArray: function (brokenNumberArray) {
        var unselectedNumber = [];
        var originalArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        for (var i = 0; i < originalArray.length; i++) {
            var num = originalArray[i];
            if (brokenNumberArray.toString().indexOf(num) < 0) {
                unselectedNumber.push(num);
            }
        }
        return unselectedNumber;
    },
    /**
     *
     * @summary 获取断组号码
     * @return {Array} 返回的号码格式 ['xxx','xx','xxxx']
     * */
    getBrokenNumberArray: function () {
        var self = this;
        return ['02', '34', '6789'];
    },
    /**
     *
     * @summary 移除重复号码
     * @param {Array} numberArr 包含重复号码的数组
     * @return {Array} 返回移除重复号码后的数组
     * */
    removedRepeatNumber: function (numberArr) {
        var resultArray = [];
        var needRemovedArray = [];
        var repeatCount = 0;
        for (var i = 0; i < numberArr.length; i++) {
            for (var j = 0; j < numberArr.length; j++) {
                if (numberArr[i] == numberArr[j]) {
                    repeatCount++;
                }
                if (repeatCount >= 2) {
                    needRemovedArray.push(numberArr[i]);
                }
            }
        }
        return resultArray;
    }
};

/**
 *
 * @summary 获取被排除的号码
 * @return {Array} 返回需要被排除的数组
 * */
NumberBroken.prototype.GetNeedRemovedNumberArray = function () {
    var self = this;
    var brokenNumArr = self.Helper.getBrokenNumberArray();
    var finalRemovedArr = [];
    //未选择的号码
    var unselectedNumberArray = self.Helper.getUnselectedNumberArray(brokenNumArr);
    for (var i = 0; i < brokenNumArr.length; i++) {
        var numStr = brokenNumArr[i] + '' + unselectedNumberArray.toString().replace(',', '');
        console.log(numStr);
        //单组号码产生的号码
        var removedArr = self.Helper.getTotalNumberArrayByOneGroupNumber(numStr);
        finalRemovedArr = finalRemovedArr.concat(removedArr);
    }
    //三组号码产生的号码
    var removedArrByThreeGroup1 = self.Helper.getTotalNumberArrayByThreeGroupNumber(brokenNumArr[0], brokenNumArr[1], brokenNumArr[2]);
    var removedArrByThreeGroup2 = self.Helper.getTotalNumberArrayByThreeGroupNumber(brokenNumArr[0], brokenNumArr[2], brokenNumArr[1]);
    var removedArrByThreeGroup3 = self.Helper.getTotalNumberArrayByThreeGroupNumber(brokenNumArr[1], brokenNumArr[0], brokenNumArr[2]);
    var removedArrByThreeGroup4 = self.Helper.getTotalNumberArrayByThreeGroupNumber(brokenNumArr[1], brokenNumArr[2], brokenNumArr[0]);
    var removedArrByThreeGroup5 = self.Helper.getTotalNumberArrayByThreeGroupNumber(brokenNumArr[2], brokenNumArr[1], brokenNumArr[0]);
    var removedArrByThreeGroup6 = self.Helper.getTotalNumberArrayByThreeGroupNumber(brokenNumArr[2], brokenNumArr[0], brokenNumArr[1]);

    finalRemovedArr = finalRemovedArr.concat(removedArrByThreeGroup1, removedArrByThreeGroup2, removedArrByThreeGroup3, removedArrByThreeGroup4, removedArrByThreeGroup5, removedArrByThreeGroup6);
    return finalRemovedArr;
};

//new NumberBroken().GetNeedRemovedNumberArray();
//console.log(new NumberBroken().GetNeedRemovedNumberArray());
//console.log(new NumberBroken().GetNeedRemovedNumberArray().length);
// console.log(new NumberBroken().GetNeedRemovedNumberArray().toString());