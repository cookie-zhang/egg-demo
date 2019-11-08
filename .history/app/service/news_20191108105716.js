'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async getNews() {
    // 获取数据
    const list = [1, 2, 3, 4, 5, 6 ];
  }
}

module.exports = NewsService;
