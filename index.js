'use strict';

var server = require('./server/index');
server.start((err) => {
  if (err) {
    return console.error(err);
  }
  console.log(`Hapi server started at ${server.info.uri}`);
});
