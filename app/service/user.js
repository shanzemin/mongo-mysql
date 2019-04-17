'use strict';

const Service = require('egg').Service;

class userService extends Service {
  async index() {
    const { ctx } = this;
    return await ctx.model.User.find();
  }

  async create(body) {
    const { ctx } = this;
    return await ctx.model.User.create(body);
  }

  async findOne(params) {
    const { ctx } = this;
    return await ctx.model.User.findOne(params);
  }
}

module.exports = userService;
