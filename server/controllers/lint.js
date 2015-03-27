'use strict';

var ghlint = require('ghlint');
var Joi = require('joi');
var P = require('promise');

var lintRepo = P.denodeify(ghlint.lintRepo);

module.exports = {
  handler: (request, reply) => {
    lintRepo(request.params.owner, request.params.repo).then((results) => {
      if (request.params.fmt === 'html') {
        reply.view('lint', {
          owner: request.params.owner,
          repo: request.params.repo,
          results: results
        });
      } else {
        reply(results);
      }
    }).catch((err) => {
      console.log(err);
      reply(err);
    });
  },
  validate: {
    params: {
      owner: Joi.string(),
      repo: Joi.string(),
      fmt: Joi.string().optional().default('json')
    }
  }
};
