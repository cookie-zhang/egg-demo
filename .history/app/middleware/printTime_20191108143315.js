'use strict';
// eslint-disable-next-line jsdoc/require-param
/**
 * options: 中间件的配置项，框架会将 app.config[${middlewareName}] 传递进来。
    app: 当前应用 Application 的实例。
 */
module.exports = (options, app) => {

  // 返回一个一步的方法
  return async function printTime() {
    console.log()
  }
};
