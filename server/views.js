'use strict';

var path = require('path');
var handlebars = require('handlebars');

var cfg = require('../config');

module.exports = {
  engines: {
    html: handlebars
  },
  path: path.join(__dirname, cfg.get('templateDir'))
};
