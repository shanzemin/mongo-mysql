'use strict';

// had enabled by egg
// exports.static = true;
module.exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};

module.exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};

module.exports.passport = {
  enable: true,
  package: 'egg-passport',
};
