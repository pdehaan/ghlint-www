'use strict';

var Hapi = require('hapi');

var cfg = require('../config');
var routes = require('./routes/index');
var views = require('./views');

var server = new Hapi.Server();
server.connection({
  port: cfg.get('port')
});

// TODO: This is a bit ugly since `routes.routes` is mysteriously an empty array.
server.route([
  routes.home,
  routes.lint
]);
server.views(views);

module.exports = server;
