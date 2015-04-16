'use strict';

var assert = require('assert');

var qs = require('..');

describe('.stringify()', function () {
  it('should .join(";") arrays', function () {
    var string = qs.stringify({
      value: [1, 2]
    });

    assert.equal(string, 'value=' + qs.escape('1,2'));
  })
})

describe('.parse()', function () {
  describe('when there are duplicate keys', function () {
    it('should only use the last value', function () {
      var obj = qs.parse('key=1&key=2&key=3');
      assert.deepEqual(obj, {
        key: '3'
      });
    })
  })
})
