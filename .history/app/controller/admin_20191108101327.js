'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {
  async admin() {

    // koa 
    const { ctx } = this;
    ctx.body = '你好，我是超级管理员';
  }
}

module.exports = AdminController;
