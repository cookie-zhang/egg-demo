/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    mysql: {
      // 单数据库信息配置
      client: {
        // host
        host: '47.104.191.170',
        // 端口号
        port: '3306',
        // 用户名
        user: 'root',
        // 密码
        password: 'mysql123',
        // 数据库名
        database: 'xiaofei',
      },
      // 是否加载到 app 上，默认开启
      app: true,
      // 是否加载到 agent 上，默认关闭
      agent: false,
    },
    security: {
      csrf: {
        enable: false,
      },
    }
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1573176828482_3364';

  // add your middleware config here
  // 中间件的使用是要进行配置  在这里添加你的中间件
  config.middleware = [ 'printTime', 'forbidip' ];
  // 配置中间件的时候可以传入参数、
  config.printTime = {
    aaa: 'aaaaaaaa',
  };
  config.api = 'www.phonegap100.com';

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
