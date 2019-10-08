'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async info() {
    const { ctx } = this;
    ctx.body = `hello, ${ctx.params.id}`;
  }
}

module.exports = UserController;
