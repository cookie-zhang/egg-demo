'use strict';

const Service = require('egg').Service;

// 每一次用户请求，框架都会实例化对应的 Service 实例，由于它继承于 egg.Service，故拥有下列属性方便我们进行开发：

// this.ctx: 当前请求的上下文 Context 对象的实例，通过它我们可以拿到框架封装好的处理当前请求的各种便捷属性和方法。
// this.app: 当前应用 Application 对象的实例，通过它我们可以拿到框架提供的全局对象和方法。
// this.service：应用定义的 Service，通过它我们可以访问到其他业务层，等价于 this.ctx.service 。
// this.config：应用运行时的配置项。
// this.logger：logger 对象，上面有四个方法（debug，info，warn，error），分别代表打印四个不同级别的日志，使用方法和效果与 context logger 中介绍的一样，但是通过这个 logger 对象记录的日志，在日志前面会加上打印该日志的文件路径，以便快速定位日志打印位置。
// Service ctx 详解
// 为了可以获取用户请求的链路，我们在 Service 初始化中，注入了请求上下文, 用户在方法中可以直接通过 this.ctx 来获取上下文相关信息。关于上下文的具体详解可以参看 Context, 有了 ctx 我们可以拿到框架给我们封装的各种便捷属性和方法。比如我们可以用：

// this.ctx.curl 发起网络调用。
// this.ctx.service.otherService 调用其他 Service。
// this.ctx.db 发起数据库调用等， db 可能是其他插件提前挂载到 app 上的模块。

class NewsService extends Service {
  async getNews() {
    // 获取接口数据 用egg封装得curl得方法
    const url = this.config.api;
    const list = this.ctx.curl(url);
    console.log(this.config.api);
    const list = [ 1, 2, 3, 4, 5, 6 ];
    return list;
  }
}

module.exports = NewsService;
