'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1548488703430_2726';

  // add your config here
  config.middleware = [];

  config.cluster = {
    listen: {
      port: 7002,
      hostname: '0.0.0.0',
    },
  };

  config.mongoose = {
    client: {
      url: 'mongodb://localhost/egg_db',
      options: {
        useNewUrlParser: true,
      },
    },
  };

  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: [ 'http://192.168.11.234' ],
  };

  return config;
};
