'use strict';

var pkg = require('../../package.json');

module.exports = {
  handler: (request, reply) => {
    reply.view('home', pkg);
  }
};
