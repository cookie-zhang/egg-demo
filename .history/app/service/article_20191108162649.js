import { Service } from 'egg';

class CustimService extends Service {
  async getInfo(options) {
    const results = await this.app.mysql.select('test', { id: 5 });
    return results[0].name;
  }
}

export default CustimService;