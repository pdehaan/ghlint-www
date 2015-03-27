'use strict';

var path = require('path');
var handlebars = require('handlebars');

module.exports = {
  engines: {
    html: handlebars
  },
  path: path.join(__dirname, 'templates')
};
