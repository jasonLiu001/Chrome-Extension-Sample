var openTimeModule = require('../../static/js/time/opentime.js');
var expect = require('chai').expect;

var openTimeDelaySeconds = 120;
describe('getNextOpenTime function test.', function () {
    it('2016.11.04 14:33:00 => 2016.11.04 14:40:00', function () {
        var openTime = new openTimeModule({
            currentTime: new Date(2016, 10, 4, 14, 33, 00),
            openTimeDelaySeconds: openTimeDelaySeconds
        });
        expect(openTime.getNextOpenTime().toLocaleString()).to.be.equal(new Date(2016, 10, 4, 14, 40, openTimeDelaySeconds).toLocaleString());
    });
    //¿çÌì²âÊÔ
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
    //ÁÙ½ç²âÊÔ
    it('2016.11.04 01:55:00 => 2016.11.04 10:00:00', function () {
        var openTime = new openTimeModule({
            currentTime: new Date(2016, 10, 4, 01, 55, openTimeDelaySeconds),
            openTimeDelaySeconds: openTimeDelaySeconds
        });
        expect(openTime.getNextOpenTime().toLocaleString()).to.be.equal(new Date(2016, 10, 4, 10, 00, openTimeDelaySeconds).toLocaleString());
    });
    //ÁÙ½ç²âÊÔ
    it('2016.11.04 01:56:00 => 2016.11.04 10:00:00', function () {
        var openTime = new openTimeModule({
            currentTime: new Date(2016, 10, 4, 01, 56, openTimeDelaySeconds),
            openTimeDelaySeconds: openTimeDelaySeconds
        });
        expect(openTime.getNextOpenTime().toLocaleString()).to.be.equal(new Date(2016, 10, 4, 10, 00, openTimeDelaySeconds).toLocaleString());
    });
    //ÁÙ½ç²âÊÔ
    it('2016.11.04 01:59:00 => 2016.11.04 10:00:00', function () {
        var openTime = new openTimeModule({
            currentTime: new Date(2016, 10, 4, 01, 59, 00),
            openTimeDelaySeconds: openTimeDelaySeconds
        });
        expect(openTime.getNextOpenTime().toLocaleString()).to.be.equal(new Date(2016, 10, 4, 10, 00, openTimeDelaySeconds).toLocaleString());
    });
    //ÁÙ½ç²âÊÔ
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