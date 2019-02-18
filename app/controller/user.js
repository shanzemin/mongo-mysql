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

  async findOne() {
    const { ctx } = this;
    const body = ctx.request.body;
    ctx.body = await ctx.service.user.findOne(body);
  }
}

module.exports = userController;
