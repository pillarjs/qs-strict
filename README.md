> [!CAUTION]
> **This repository is archived and no longer actively maintained.**
>
> We are no longer accepting issues, feature requests, or pull requests.
> For additional support or questions, please visit the [Express.js Discussions page](https://github.com/expressjs/express/discussions).


# qs-strict

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

A querystring parser that strictly uses strings.
It never returns `Array`s or `Object`s,
so you never have to check its type.

## API

### var qs = require('qs-strict')

A drop-in implementation for `require('querystring')`.

### qs.parse()

[npm-image]: https://img.shields.io/npm/v/qs-strict.svg?style=flat-square
[npm-url]: https://npmjs.org/package/qs-strict
[github-tag]: http://img.shields.io/github/tag/pillarjs/qs-strict.svg?style=flat-square
[github-url]: https://github.com/pillarjs/qs-strict/tags
[travis-image]: https://img.shields.io/travis/pillarjs/qs-strict.svg?style=flat-square
[travis-url]: https://travis-ci.org/pillarjs/qs-strict
[coveralls-image]: https://img.shields.io/coveralls/pillarjs/qs-strict.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/pillarjs/qs-strict
[david-image]: http://img.shields.io/david/pillarjs/qs-strict.svg?style=flat-square
[david-url]: https://david-dm.org/pillarjs/qs-strict
[license-image]: http://img.shields.io/npm/l/qs-strict.svg?style=flat-square
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/qs-strict.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/qs-strict
