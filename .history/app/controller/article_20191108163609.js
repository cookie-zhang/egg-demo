'use strict';

const Controller = require('egg').Controller;

class CustomController extends Controller {
  async custonIndex() { // 注意这里要定义成异步方法防止请求被阻塞

    const info = await this.ctx.service.customService.getList(); // 调用Service层传参
    this.ctx.body = {
      code: 200,
      data: info,
    };// 返回体
    this.ctx.status = 200;
  }
}

module.exports = CustomController;
