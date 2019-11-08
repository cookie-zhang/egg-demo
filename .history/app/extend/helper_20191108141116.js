'use strict';
// 这个扩展就可以添加一些第三方插件之类得辅助插件协助开发
// app/extend/helper.js
module.exports = {
  foo() {
    // this 是 helper 对象，在其中可以调用其他 helper 方法
    // this.ctx => context 对象
    // this.app => application 对象
  },
};
