'use strict';

const Controller = require('egg').Controller;

class studentController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.student.index();
  }

  async create() {
    const { ctx } = this;
    const body = ctx.request.body;
    ctx.body = await ctx.service.student.create(body);
  }

}

module.exports = studentController;
