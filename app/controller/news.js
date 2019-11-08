'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = '新闻界面';
  }
  async detail() {
    // 获取get传值
    // koa中获取方式get传值 ctx.query

    // egg.js里面获取 路由入参
    const query = this.ctx.query;
    console.log(query); // {id:123}
    const { ctx } = this;
    ctx.body = '新闻详情界面';
  }

  async newsList() {
    // 动态路由的获取
    // koa 中获取的方式 ctx.params

    // egg 获取方式 this.ctx.params;
    const params = this.ctx.params;
    console.log(params);

    const { ctx } = this;
    ctx.body = '新闻列表';

  }
}

module.exports = NewsController;
