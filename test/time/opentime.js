var openTimeModule = require('../../static/js/time/opentime.js');
var expect = require('chai').expect;

describe('getNextOpenTime function test.', function () {
    it('2016.11.04 14:33:00 => 2016.11.04 14:40:00', function () {
        var openTime = new openTimeModule({
            currentTime: new Date(2016, 11, 4, 14, 33, 00),
            openTimeDelaySeconds: 0
        });
        expect(openTime.getNextOpenTime().getTime()).to.be.equal(new Date(2016, 11, 4, 14, 40, 00).getTime());
    });
    it('2016.11.04 23:59:00 => 2016.11.05 00:05:00', function () {
        var openTime = new openTimeModule({
            currentTime: new Date(2016, 11, 4, 23, 59, 00),
            openTimeDelaySeconds: 0
        });
        expect(openTime.getNextOpenTime().getTime()).to.be.equal(new Date(2016, 11, 5, 00, 05, 00).getTime());
    });
});