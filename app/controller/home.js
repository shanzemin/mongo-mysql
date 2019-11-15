'use strict';

const cheerio = require('cheerio');
const fs = require('fs');

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this
    let url = 'http://top.anyv.net/'
    let result = await ctx.curl(url, { method: 'GET', contentType: 'json', dataType: 'text', encoding: null })
    let $ = cheerio.load(result.data)
    let data = $('div.newpicsmall_list').text()
    fs.writeFileSync('/home/shanzm/workspace/egg-example/tmp/officialAccounts.txt', data)
    ctx.response.body = 'ok'
  }
}

module.exports = HomeController;
