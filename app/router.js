'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/api/students', controller.student.index);
  router.get('/api/users', controller.user.index);
  router.post('/api/users', controller.user.create);
};
