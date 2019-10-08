/* eslint valid-jsdoc: "off" */

'use strict';
const path = require('path');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1568946553674_7280';

  // add your middleware config here
  config.middleware = [];

  // static
  config.static = {
    prefix: '/public/',
    dir: path.join(appInfo.baseDir, '/app/public/'),
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // 需根据实际使用修改mysql配置
  // 也可添加其他数据库配置，如mongodb等..
  config.mysql = {
    client: {
      // host
      host: 'localhost',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '123456',
      // 数据库名
      database: 'ceshi',
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
