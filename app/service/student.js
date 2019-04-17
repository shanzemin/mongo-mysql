'use strict';

const Service = require('egg').Service;

class studentService extends Service {
  async index() {
    const { ctx } = this;
    return await ctx.model.Student.find();
  }

  async create(body) {
    const { ctx } = this;
    return await ctx.model.Student.create(body);
  }
}

module.exports = studentService;
