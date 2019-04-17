'use strict';

const Service = require('egg').Service;

class studentService extends Service {
  async index() {
    const { ctx, app } = this;
    return await app.modelMysql.Student.find();
  }

  async create(body) {
    const { ctx, app } = this;
    return await app.modelMysql.Student.create(body);
  }
}

module.exports = studentService;
