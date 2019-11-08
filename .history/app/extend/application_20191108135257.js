
'use strict';

module.exports = {
  foo() {
    // 框架会把 app/extend/application.js 
    // 中定义的对象与 Koa Application 的 prototype 对象进行合并，在应用启动时会基于扩展后的 prototype 生成 app 对象。
    // this 就是 app对象
    console.log('-----------------------');
    console.log(this);
  }
}