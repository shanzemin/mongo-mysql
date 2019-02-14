'use strict';

const Controller = require('egg').Controller;

class loginController extends Controller {
  async index() {
    this.ctx.body = 'test';
  }
}

module.exports = loginController;
