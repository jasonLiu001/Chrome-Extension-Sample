var openTimeModule = require('../../static/js/time/opentime.js');
var expect = require('chai').expect;

var openTimeDelaySeconds = 0;
describe('getNextOpenTime function test.', function () {
    it('2016.11.04 14:33:00 => 2016.11.04 14:40:00', function () {
        var openTime = new openTimeModule({
            currentTime: new Date(2016, 10, 4, 14, 33, 00),
            openTimeDelaySeconds: openTimeDelaySeconds
        });
        expect(openTime.getNextOpenTime().toLocaleString()).to.be.equal(new Date(2016, 10, 4, 14, 40, openTimeDelaySeconds).toLocaleString());
    });
    //跨天测试
    it('2016.11.04 23:59:00 => 2016.11.05 00:00:00', function () {
        var openTime = new openTimeModule({
            currentTime: new Date(2016, 10, 4, 23, 59, 00),
            openTimeDelaySeconds: openTimeDelaySeconds
        });
        expect(openTime.getNextOpenTime().toLocaleString()).to.be.equal(new Date(2016, 10, 5, 00, 00, openTimeDelaySeconds).toLocaleString());
    });
    it('2016.11.04 01:54:00 => 2016.11.04 01:55:00', function () {
        var openTime = new openTimeModule({
            currentTime: new Date(2016, 10, 4, 01, 54, 00),
            openTimeDelaySeconds: openTimeDelaySeconds
        });
        expect(openTime.getNextOpenTime().toLocaleString()).to.be.equal(new Date(2016, 10, 4, 01, 55, openTimeDelaySeconds).toLocaleString());
    });
    //临界测试
    it('2016.11.04 01:55:00 => 2016.11.04 10:00:00', function () {
        var openTime = new openTimeModule({
            currentTime: new Date(2016, 10, 4, 01, 55, openTimeDelaySeconds),
            openTimeDelaySeconds: openTimeDelaySeconds
        });
        expect(openTime.getNextOpenTime().toLocaleString()).to.be.equal(new Date(2016, 10, 4, 10, 00, openTimeDelaySeconds).toLocaleString());
    });
    //临界测试
    it('2016.11.04 01:56:00 => 2016.11.04 10:00:00', function () {
        var openTime = new openTimeModule({
            currentTime: new Date(2016, 10, 4, 01, 56, openTimeDelaySeconds),
            openTimeDelaySeconds: openTimeDelaySeconds
        });
        expect(openTime.getNextOpenTime().toLocaleString()).to.be.equal(new Date(2016, 10, 4, 10, 00, openTimeDelaySeconds).toLocaleString());
    });
    //临界测试
    it('2016.11.04 01:59:00 => 2016.11.04 10:00:00', function () {
        var openTime = new openTimeModule({
            currentTime: new Date(2016, 10, 4, 01, 59, 00),
            openTimeDelaySeconds: openTimeDelaySeconds
        });
        expect(openTime.getNextOpenTime().toLocaleString()).to.be.equal(new Date(2016, 10, 4, 10, 00, openTimeDelaySeconds).toLocaleString());
    });
    //临界测试
    it('2016.11.04 00:00:00 => 2016.11.04 00:05:00', function () {
        var openTime = new openTimeModule({
            currentTime: new Date(2016, 10, 4, 00, 00, openTimeDelaySeconds),
            openTimeDelaySeconds: openTimeDelaySeconds
        });
        expect(openTime.getNextOpenTime().toLocaleString()).to.be.equal(new Date(2016, 10, 4, 00, 05, openTimeDelaySeconds).toLocaleString());
    });
    it('2016.11.04 10:00:00 => 2016.11.04 10:10:00', function () {
        var openTime = new openTimeModule({
            currentTime: new Date(2016, 10, 4, 10, 00, openTimeDelaySeconds),
            openTimeDelaySeconds: openTimeDelaySeconds
        });
        expect(openTime.getNextOpenTime().toLocaleString()).to.be.equal(new Date(2016, 10, 4, 10, 10, openTimeDelaySeconds).toLocaleString());
    });
});

describe('enableExecInvest function test', function () {
    it('2016.11.04 14:33:00 => true', function () {
        var openTime = new openTimeModule({
            currentTime: new Date(2016, 10, 4, 14, 33, 00),
            openTimeDelaySeconds: openTimeDelaySeconds
        });
        expect(openTime.enableExecInvest()).to.be.equal(true);
    });
    it('2016.11.04 14:09:00 => false', function () {
        var openTime = new openTimeModule({
            currentTime: new Date(2016, 10, 4, 14, 09, 00),
            openTimeDelaySeconds: openTimeDelaySeconds,
            nextPeriodInvestTime: new Date(2016, 10, 4, 14, 10, 00)
        });
        expect(openTime.nextPeriodInvestTime.toLocaleString()).to.be.equal(new Date(2016, 10, 4, 14, 10, openTimeDelaySeconds).toLocaleString());
        expect(openTime.enableExecInvest()).to.be.equal(false);
    });
    it('2016.11.04 14:11:00 => true', function () {
        var options = {
            currentTime: new Date(2016, 10, 4, 14, 11, 00),
            openTimeDelaySeconds: openTimeDelaySeconds,
            nextPeriodInvestTime: new Date(2016, 10, 4, 14, 10, 00)
        };
        var openTime = new openTimeModule(options);
        expect(openTime.enableExecInvest()).to.be.equal(true);
        //更新下期时间
        expect(openTime.nextPeriodInvestTime.toLocaleString()).to.be.equal(new Date(2016, 10, 4, 14, 20, openTimeDelaySeconds).toLocaleString());
    });
});