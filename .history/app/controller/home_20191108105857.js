'use strict';

const Controller = require('egg').Controller;

/* egg mvc 模式框架
view       视图层 public 静态资源

controller 控制层  负责处理一些业务逻辑处理

modle      模型层 和数据打交道（查询数据库  请求数据）

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
