'use strict';

var ghlint = require('ghlint');
var P = require('promise');

module.exports = P.denodeify(ghlint.lintRepo);
