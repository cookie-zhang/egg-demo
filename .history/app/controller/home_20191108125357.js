'use strict';

const Controller = require('egg').Controller;

/* egg mvc 模式框架
view       视图层 public 静态资源

controller 控制层  负责处理一些业务逻辑处理

modle      模型层 和数据打交道（查询数据库  请求数据）

*/

class HomeController extends Controller {
  async index() {
    // service 就是modlue层（服务层）   获取modle里面的数据   有个坑：异步处理加上await
    // ----------------》  为什么在controller层就用this.可以获取到你想要的东西呢？  因为挂在了很多了以下的属性  所以就可以获取到

    // 定义的 Controller 类，会在每一个请求访问到 server 时实例化一个全新的对象，而项目中的 Controller 类继承于 egg.Controller，
    // 会有下面几个属性挂在 this 上。
    // this.ctx: 当前请求的上下文 Context 对象的实例，通过它我们可以拿到框架封装好的处理当前请求的各种便捷属性和方法。
    // this.app: 当前应用 Application 对象的实例，通过它我们可以拿到框架提供的全局对象和方法。
    // this.service：应用定义的 Service，通过它我们可以访问到抽象出的业务层，等价于 this.ctx.service 。
    // this.config：应用运行时的配置项。
    // this.logger：logger 对象，上面有四个方法（debug，info，warn，error），
    // 分别代表打印四个不同级别的日志，使用方法和效果与 context logger 中介绍的一样，但是通过这个 logger 对象记录的日志，
    // 在日志前面会加上打印该日志的文件路径，以便快速定位日志打印位置。

    //  -----------------------------------------使用规范

    const list = await this.service.news.getNews();
    const { name, age } = await this.service.user.getUserInfo();
    const { ctx } = this;
    ctx.body = '你好，你是个蛋----' + list + '名字：-》' + name + ' --- 年龄：-》' + age;
  }


  async news() {
    const { ctx } = this;
    ctx.body = '你好，我是news';
  }
}

module.exports = HomeController;
