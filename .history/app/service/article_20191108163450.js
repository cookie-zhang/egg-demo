'use strict';
const Service = require('egg').Service;

class CustimService extends Service {
  async getInfo() {
    const results = await this.app.mysql.select('test', { id: 5 });
    return results[0].name;
  }
}

module.exports = CustimService;
