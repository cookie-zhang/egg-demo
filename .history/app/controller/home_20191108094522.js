'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = '你好，你是个蛋';
  }

  // eslint-disable-next-line no-dupe-class-members
  async index() {
    const { ctx } = this;
    ctx.body = '你好，你是个蛋';
  }
}

module.exports = HomeController;
