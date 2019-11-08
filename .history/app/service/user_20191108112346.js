'use strict';

const Service = require('egg').Service;

class UserService extends Service {
   async getUserIfo() {
    return {
        name:''
    }
  }
}

module.exports = UserService;
