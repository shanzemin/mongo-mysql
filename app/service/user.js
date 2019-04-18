'use strict';

const Service = require('egg').Service;

class userService extends Service {
  async index() {
    const { ctx, app } = this;
    return await app.mongo.User.find();
  }

  async create(body) {
    const { ctx, app } = this;
    return await app.mongo.User.create(body);
  }

  async findOne(params) {
    const { ctx, app } = this;
    return await app.mongo.User.findOne(params);
  }
}

module.exports = userService;
