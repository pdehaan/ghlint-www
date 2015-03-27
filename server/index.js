'use strict';

var Hapi = require('hapi');

var routes = require('./routes/index');
var views = require('./views');

var server = new Hapi.Server();
server.connection({
  port: process.env.PORT || 3000
});
server.views(views);

server.route(routes.home);
server.route(routes.lint);

module.exports = server;
