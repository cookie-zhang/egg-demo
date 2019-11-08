'use strict';

// 模拟在某个ip下多次请求抓取数据
module.exports = (options, app) => {
  // 返回一个一步的方法
  return async function forbidip(ctx, next) {
    // 要屏蔽的ip： 1.去数据库取  2.从参数传入

    con
    await next();
  };
};
