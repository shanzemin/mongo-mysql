'use strict';

const jwt = require('jsonwebtoken');
const config = require('../config/index');

exports.signToken = function(id) {
  return jwt.sign({ _id: id }, config.secrets.session, {
    expiresIn: config.expiresIn,
  });
};
