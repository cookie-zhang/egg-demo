'use strict';

module.exports = (options, app) => {

  // 返回一个一步的方法
  return async function forbidip(ctx, next) {
   
    await next();
  };
};
