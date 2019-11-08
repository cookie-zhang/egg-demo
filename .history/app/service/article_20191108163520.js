'use strict';
const Service = require('egg').Service;

class CustimService extends Service {
  async getList() {
    const results = await this.app.mysql.select('article', { id: 5 });
    return results[0].name;
  }
}

module.exports = CustimService;
