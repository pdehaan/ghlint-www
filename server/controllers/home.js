'use strict';

module.exports = {
  handler: (request, reply) => {
    reply.view('home'); // <a href="/lint/mozilla/fxa-content-server">/lint/mozilla/fxa-content/server</a>');
  }
};
