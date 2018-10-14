'use strict';

const gtlds = require('gtlds').names;

module.exports = needle => gtlds.includes(needle);
