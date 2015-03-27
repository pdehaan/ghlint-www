'use strict';

var Hapi = require('hapi');

var cfg = require('../config');
var routes = require('./routes/index');
var views = require('./views');

var server = new Hapi.Server();
server.connection({
  port: cfg.get('port')
});
server.route([
  routes.home,
  routes.lint
]);
server.views(views);

module.exports = server;
