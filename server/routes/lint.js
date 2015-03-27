'use strict';

module.exports = {
  method: 'GET',
  path: '/lint/{owner}/{repo}/{format?}',
  config: require('../controllers/lint')
};
