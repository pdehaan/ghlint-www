'use strict';

var Joi = require('joi');

var lintRepo = require('../../lib/lintrepo');

module.exports = {
  handler: (request, reply) => {
    var {owner, repo, format} = request.params;
    lintRepo(owner, repo).then((results) => {
      if (format === 'html') {
        // If `format` is "html", display a pretty page.
        reply.view('lint', {
          ownerRepo: `${owner}/${repo}`,
          results: results
        });
      } else {
        // Otherwise, just throw JSON at the wall.
        reply(results);
      }
    }).catch((err) => {
      console.log(err);
      // Use `toString()` to avoid generic Hapi error message.
      // TODO: Use Boom?
      reply(err.toString());
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
