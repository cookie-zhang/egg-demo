'use strict';
module.exports = {
  getIp() {
    Context 指的是 Koa 的请求上下文，这是 请求级别 的对象，每次请求生成一个 Context 实例，通常我们也简写成 ctx。在所有的文档中，Context 和 ctx 都是指 Koa 的上下文对象。

    访问方式
    middleware 中 this 就是 ctx，例如 this.cookies.get('foo')。
    controller 有两种写法，类的写法通过 this.ctx，方法的写法直接通过 ctx 入参。
    helper，service 中的 this 指向 helper，service 对象本身，使用 this.ctx 访问 context 对象，例如 this.ctx.cookies.get('foo')。
    扩展方式
    框架会把 app/extend/context.js 中定义的对象与 Koa Context 的 prototype 对象进行合并，在处理请求时会基于扩展后的 prototype 生成 ctx 对象。
    console.log('-----------------------');
    console.log(this);
  },
};
