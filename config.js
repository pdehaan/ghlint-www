'use strict';

var convict = require('convict');

var conf = convict({
  env: {
    doc: 'The applicaton environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV'
  },
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 3000,
    env: 'PORT'
  },
  templateDir: {
    doc: 'Handlebars templates path',
    format: String,
    default: 'templates' // Relative to ./server/ directory.
  },

  ghlintId: {
    doc: 'GitHub ID',
    format: String,
    env:'GHLINT_ID'
  },
  ghlintSecret: {
    doc: 'GitHub Secret',
    format: String,
    env: 'GHLINT_SECRET'
  }
});

// load environment dependent configuration.
var env = conf.get('env');
conf.loadFile(`./config/${env}.json`);

// perform validation
conf.validate();

module.exports = conf;
