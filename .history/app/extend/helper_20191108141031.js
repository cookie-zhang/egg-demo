'use strict';
// 这个扩展就可以
// app/extend/helper.js
module.exports = {
  foo() {
    // this 是 helper 对象，在其中可以调用其他 helper 方法
    // this.ctx => context 对象
    // this.app => application 对象
  },
};