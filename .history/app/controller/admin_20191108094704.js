'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {
  async admin() {
    const { ctx } = this;
    ctx.body = '你好，你是个蛋';
  }
}

module.exports = AdminController;
