var openTimeModule = require('../../static/js/time/opentime.js');
var expect = require('chai').expect;

describe('getNextOpenTime function test.', function () {
    it('2016.11.04 14:33:00 => 2016.11.04 14:40:00', function () {
        var openTime = new openTimeModule({
            currentTime: new Date(2016, 10, 4, 14, 33, 00),
            openTimeDelaySeconds: 0
        });
        expect(openTime.getNextOpenTime().toLocaleString()).to.be.equal(new Date(2016, 10, 4, 14, 40, 00).toLocaleString());
    });
    it('2016.11.04 23:59:00 => 2016.11.05 00:00:00', function () {
        var openTime = new openTimeModule({
            currentTime: new Date(2016, 10, 4, 23, 59, 00),
            openTimeDelaySeconds: 0
        });
        expect(openTime.getNextOpenTime().toLocaleString()).to.be.equal(new Date(2016, 10, 5, 00, 00, 00).toLocaleString());
    });
});