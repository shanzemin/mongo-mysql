'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    console.log('-----不想进入这里----');
    this.ctx.body = this.ctx.req.user;
  }
}

module.exports = HomeController;
