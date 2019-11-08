'use strict';

module.exports = (options, app) => {

  // 返回一个一步的方法
  return async function forbid(ctx, next) {
    console.log('---->>>>');
    console.log(options);
    console.log(app);
    console.log(new Date());
    await next();
  };
};
