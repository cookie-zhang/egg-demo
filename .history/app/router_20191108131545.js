'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/admin', controller.admin.admin);
  router.get('/news', controller.news.index);
  router.get('/detail', controller.news.detail);
  router.get('/newsList/:id', controller.news.newsList);
};
