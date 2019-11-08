'use strict';

const Service = require('egg').Service;

class UserService extends Service {
   async getUserIfo() {
    return {
        name:'飞啊',
      age:18
    }
  }
}

module.exports = UserService;
