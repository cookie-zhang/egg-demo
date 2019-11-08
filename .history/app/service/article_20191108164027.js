'use strict';
const Service = require('egg').Service;

class CustimService extends Service {
  async getList() {
    
    const results = await this.app.mysql.select('article');
    return results;
  }
}

module.exports = CustimService;
