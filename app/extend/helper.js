'use strict';
// 这个扩展就可以添加一些第三方插件之类得辅助插件协助开发
// 例如引入时间处理插件 cnpm i silly-datetime --save
// app/extend/helper.js
const sd = require('silly-datetime');
module.exports = {
  formatTime(time) {
    // this 是 helper 对象，在其中可以调用其他 helper 方法
    // this.ctx => context 对象
    // this.app => application 对象
    return sd.format(new Date(time * 1000), 'YYYY-MM-DD HH:mm');
  },
};
