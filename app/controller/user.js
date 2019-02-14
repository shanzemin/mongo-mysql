'use strict';

const Controller = require('egg').Controller;

class userController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.user.index();
  }

  async create() {
    const { ctx } = this;
    const body = ctx.request.body;
    ctx.body = await ctx.service.user.create(body);
  }
}

module.exports = userController;
