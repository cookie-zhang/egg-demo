'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = '你好，你是个蛋';
  }

  async news() {
    const { ctx } = this;
    ctx.body = '你好，我是';
  }
}

module.exports = HomeController;
