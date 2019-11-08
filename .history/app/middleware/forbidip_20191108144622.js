'use strict';

// 模拟在某个ip下多次请求抓取数据
module.exports = (options, app) => {
  // 返回一个一步的方法
  return async function forbidip(ctx, next) {
    console.log('---->>>>');
    console.log(options);
    console.log(app);
    console.log(new Date());
    await next();
  };
};
