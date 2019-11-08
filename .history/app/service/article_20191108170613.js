'use strict';
const Service = require('egg').Service;

class CustimService extends Service {
  async getList() {
    console.log('service------');
    const results = await this.app.mysql.get('article', '');
    return results;
  }
}

module.exports = CustimService;
