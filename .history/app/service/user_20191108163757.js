'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async getUserInfo() {
    return {
      name: '飞啊',
      age: 18,
    };
  }
}

module.exports = UserService;
