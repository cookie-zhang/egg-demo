'use strict';

const Controller = require('egg').Controller;

/* egg mvc 模式框架
view 视图层

controller 控制层  负责处理一些

*/

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = '你好，你是个蛋';
  }

  async news() {
    const { ctx } = this;
    ctx.body = '你好，我是news';
  }
}

module.exports = HomeController;
