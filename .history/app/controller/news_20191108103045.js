'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = '新闻界面';
  }
  async detail() {
    // 获取get传值
    // koa中是 
    const { ctx } = this;
    ctx.body = '新闻详情界面';
  }
}

module.exports = NewsController;
