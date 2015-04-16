'use strict';

var assert = require('assert');

var qs = require('..');

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
