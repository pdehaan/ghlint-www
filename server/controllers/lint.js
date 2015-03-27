'use strict';

var Joi = require('joi');

var lintRepo = require('../../lib/lintrepo');

module.exports = {
  handler: (request, reply) => {
    var {owner, repo, format} = request.params;
    lintRepo(owner, repo).then((results) => {
      if (format === 'html') {
        reply.view('lint', {
          ownerRepo: `${owner}/${repo}`,
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
      format: Joi.string().optional().valid('html', 'json').default('json')
    }
  }
};
