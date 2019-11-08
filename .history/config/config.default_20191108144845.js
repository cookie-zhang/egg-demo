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
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1573176828482_3364';

  // add your middleware config here
  // 中间件的使用是要进行配置  在这里添加你的中间件
  config.middleware = [ 'printTime'， ];
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
