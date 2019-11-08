'use strict';

// 模拟在某个ip下多次请求抓取数据
module.exports = (options, app) => {
  // 返回一个一步的方法
  return async function forbidip(ctx, next) {
    // 要屏蔽的
    await next();
  };
};
