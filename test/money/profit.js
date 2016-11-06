var profitModule = require('../../static/js/money/profit.js');
var expect = require('chai').expect;

var userSettings = {
    normalSettings: {
        maxWinMoney: null,
        maxLoseMoney: null,
        prizeMoney: null,
        playMode: 'yuan',
        accountBalance: 1930
    },
    autoShutDownSettings: {
        autoShutdownPC: 'maxWinMoney'
    }
};

var enumPlayMode = {
    yuan: 'yuan',
    jiao: 'jiao',
    feng: 'feng'
};

describe('getWinMoney function test.', function () {
    //赚1922
    it('should win 1922=>1', function () {
        userSettings.normalSettings.prizeMoney = 1930;
        var profit = new profitModule({
            userSettings: userSettings
        });
        expect(profit.getWinMoney('123 333 555 444', enumPlayMode, true)).to.be.equal(1922);
    });
    it('should win 1922=>2', function () {
        userSettings.normalSettings.prizeMoney = 1930;
        var profit = new profitModule({
            userSettings: userSettings
        });
        expect(profit.getWinMoney('123 , 333 , 555 , 444', enumPlayMode, false)).to.be.equal(-8);
    });
});

describe('setAccountBalanceAfterInvest function test.', function () {
    it('should win 1992', function () {
        userSettings.normalSettings.prizeMoney = 1930;
        var profit = new profitModule({
            userSettings: userSettings,
            currentAccountBalance: 2000
        });
        profit.setAccountBalanceAfterInvest('123 333 555 444', enumPlayMode);
        expect(profit.currentAccountBalance).to.be.equal(1992);
    });
});

describe('getTotalWinMoney function test.', function () {
    it('should win 70', function () {
        userSettings.normalSettings.prizeMoney = 1930;
        var profit = new profitModule({
            userSettings: userSettings,
            currentAccountBalance: 2000
        });
        expect(profit.getTotalWinMoney(enumPlayMode)).to.be.equal(70);
    });
});

describe('getInvestMoney function test.', function () {
    it('should invest 8', function () {
        userSettings.normalSettings.prizeMoney = 1930;
        var profit = new profitModule({
            userSettings: userSettings
        });
        expect(profit.getInvestMoney('123 , 333 , 555 , 444', enumPlayMode)).to.be.equal(8);
    });
});