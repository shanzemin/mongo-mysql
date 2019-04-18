'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1548488703430_2726';

  // add your config here
  config.middleware = [];

  config.cluster = {
    listen: {
      port: 9399,
      hostname: '0.0.0.0',
    },
  };
  
  // config.delegate = 'app/model/mongoose'
  
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '123456',
    database: 'egg_db',
    // baseDir: 'mysql',
    // delegate: 'modelMysql'
  };
  
  config.mongoose = {
    client: {
      url: 'mongodb://localhost/egg_db',
      options: {
        useNewUrlParser: true
      }
    },
    loadModel: false
  };

  config.security = {
    csrf: false
  };

  return config;
};
