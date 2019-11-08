'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = '新闻界面';
  }
  async detail() {
    const { ctx } = this；
    ctx.body = '新闻详情界面'
  }
}

module.exports = NewsController;
