'use strict';
const Service = require('egg').Service;

class CustimService extends Service {
  async getList() {
    console.log('service------');
    const results = await this.app.mysql.select('select * from user_list','');
    return results;
  }
}

module.exports = CustimService;
