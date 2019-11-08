'use strict';

// 模拟在某个ip下多次请求抓取数据
module.exports = (options, app) => {
  // 返回一个一步的方法
  return async function forbidip(ctx, next) {
    // 要屏蔽的ip： 1.去数据库取  2.从参数传入

    const forbidip = '127.0.0.1'; // 例如这是要屏蔽的ip

    // 获取客户端的ip
    console.log('111222333');
    if (forbidip == ctx.request.ip) {
        ctx.state=403;
        ctx.message = '您的ip已经被封'
    }else{
        await next();
    }
    console.log(ctx.request.ip);
   
  };
};
