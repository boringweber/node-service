'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  async getTestData() {
    const data = await this.app.mysql.get('ceshidata', { id: '1' });
    return data;
  }
}

module.exports = HomeService;
