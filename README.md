# ai-log

[![Travis Build Status](https://img.shields.io/travis/parro-it/ai-log/master.svg)](http://travis-ci.org/parro-it/ai-log)
[![NPM downloads](https://img.shields.io/npm/dt/ai-log.svg)](https://npmjs.org/package/ai-log)

> Tap into an async iterable pipeline and log all chunks passing through

> **_This module is part of
> [Async iterable fun](https://github.com/parro-it/ai-fun), a complete toolset
> of modules to work with async iterables._**

## Usage

description of the example

```js
import log from "ai-log";
import map from "ai-map";
import compose from "compose-function";

const double = map.with(n => n * 2);
const add2 = map.with(n => n + 2);
const calculate = compose(
  log("add2 result"),
  add2,
  log("double result"),
  double
);
calculate([1, 2, 3]);
```

This will output

```
[double result] 2
[add2 result] 4
[double result] 4
[add2 result] 6
[double result] 6
[add2 result] 8
```

## API

## Install

With [npm](https://npmjs.org/) installed, run

```bash
npm install --save ai-log
```

## See Also

* [`parro-it/ai-fun`](https://github.com/parro-it/ai-fun) - A collection of
  modules to easy deal with async iterables.

* [`noffle/common-readme`](https://github.com/noffle/common-readme) - « a common
  readme for node ».

## License

MIT Licensed © 2017 Andrea Parodi
