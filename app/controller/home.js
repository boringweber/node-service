'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const data = await ctx.service.home.getTestData();
    ctx.body = data;
  }

  async about() {
    const { ctx } = this;
    ctx.body = '<h1 style="color: red;">about</h1>';
  }
}

module.exports = HomeController;
