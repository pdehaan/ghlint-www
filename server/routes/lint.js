'use strict';

module.exports = {
  method: 'GET',
  path: '/lint/{owner}/{repo}/{fmt?}',
  config: require('../controllers/lint')
};
