'use strict';

var lintRepo = require('ghlint').lintRepo;
var denodeify = require('promise').denodeify;

module.exports = denodeify(lintRepo);
