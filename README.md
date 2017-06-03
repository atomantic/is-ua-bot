# is-ua-bot

  An improved user-agent parser to detect bots

  [![Build Status](https://travis-ci.org/atomantic/is-ua-bot.png)](https://travis-ci.org/atomantic/is-ua-bot)
  [![](https://img.shields.io/npm/dm/is-ua-bot.svg?style=flat)](https://www.npmjs.org/package/is-ua-bot)
  [![](https://img.shields.io/npm/v/is-ua-bot.svg?style=flat)](https://www.npmjs.org/package/is-ua-bot)
  [![](https://img.shields.io/david/atomantic/is-ua-bot.svg?style=flat)](https://www.npmjs.org/package/is-ua-bot)

## Installation

    $ npm install is-ua-bot

## Usage

```js
const isBot = require('is-ua-bot')

// just for testing:
const assert = require('assert')

// identifies googlebot as bot (returns true)
assert(isBot('Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'))

// Android Pixel is not a bot (returns false)
assert(!isBot('Android 7.1; Pixel Build/NDE63P)'))
```

## Tests

We have a set of Bot agents in `./test/data/bots.js` and a set of known non-bots in `./text/data/not-bots.js`. Please contribute!

Run tests
```bash
npm test
```

## Author

Adam Eivy is a software architect by day and a drawing dad by night. Check out his latest project [Beetle Royale](http://beetleroyale.etsy.com) or [follow him on the interwebs](http://adameivy.com)

![follow](https://img.shields.io/twitter/follow/antic.svg?style=social&label=Follow)

[![gratipay](https://img.shields.io/gratipay/antic.svg?style=flat)](https://gratipay.com/antic)
[![Beerpay](https://beerpay.io/atomantic/antic/badge.svg?style=flat-square)](https://beerpay.io/atomantic/antic)

$Crypto Tipping Jars:

- Litecoin ($LTC): LeMkJv1Xoxnt2YvRgKkNZZJRgZYgGzcSyv
- Bitcoin ($BTC): 1CWDM7dYLoBwJyf2kbGANAmuySwFWC2NZu
- Ethereum ($ETH): 0xAA33bAe03131f3aa36e1de3e4bD53583c41F8d64
