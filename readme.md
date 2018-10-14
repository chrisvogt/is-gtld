# is-gtld [![Build Status](https://travis-ci.org/chrisvogt/is-gtld.svg?branch=master)](https://travis-ci.org/chrisvogt/is-gtld) [![codecov](https://codecov.io/gh/chrisvogt/is-gtld/badge.svg?branch=master)](https://codecov.io/gh/chrisvogt/is-gtld?branch=master)

> Check if a value is a valid gTLD


## Install

```
$ npm install is-gtld
```


## Usage

```js
const isGTLD = require('is-gtld');

isGTLD('xyz');
//=> 'true'
```


## API

### isGTLD(input)

#### input

Type: `string`

The gTLD or domain name extension to check.


## Related

- [gtlds](https://github.com/chrisvogt/gtlds) - Get all gTLDs


## License

MIT © [Chris Vogt](http://github.com/chrisvogt/is-gtld)
