'use strict';
const Service = require('egg').Service;

class CustimService extends Service {
  async getList() {
    console.log('service------');
    const results = await this.app.mysql.select('SELECT * FROM `posts`');
    return results;
  }
}

module.exports = CustimService;