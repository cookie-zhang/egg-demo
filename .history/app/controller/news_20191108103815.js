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

  async newsList () {
    // 动态路由的获取
    
  }
}

module.exports = NewsController;
