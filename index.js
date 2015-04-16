'use strict';

var QueryString = exports;

// use the native querystring implementation for encoding and decoding
var qs = require('querystring');
var methods = [
  'unescapeBuffer',
  'unescape',
  'escape',
  'stringify',
  'encode',
];

methods.forEach(function (method) {
  QueryString[method] = qs[method];
});

/**
 * Everything below this comment is basically copied from io.js
 * As of version: https://github.com/iojs/io.js/blob/10e31ba56c676bdcad39ccad22ea9117733b8eb5/lib/querystring.js
 */

// Parse a key=val string.
QueryString.parse = QueryString.decode = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  var decode = QueryString.unescape;
  if (options && typeof options.decodeURIComponent === 'function') {
    decode = options.decodeURIComponent;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        k, v;

    if (idx >= 0) {
      k = decodeStr(x.substring(0, idx), decode);
      v = decodeStr(x.substring(idx + 1), decode);
    } else {
      k = decodeStr(x, decode);
      v = '';
    }

    obj[k] = v;
  }

  return obj;
};


function decodeStr(s, decoder) {
  try {
    return decoder(s);
  } catch (e) {
    return QueryString.unescape(s, true);
  }
}
