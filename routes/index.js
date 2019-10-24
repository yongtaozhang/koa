const Router = require('koa-router');
const ArtileController = require('../controllers/article');

const router = new Router({
  prefix: '/api/v1'
});

router

  .post('/article/create', ArtileController.create)

  .get('/article/:id', ArtileController.detail)

  .all('/article', ArtileController.findAll)

  .del('/article/delete/:id', ArtileController.delBy)

  .put('/article/update/:id', ArtileController.update)

module.exports = router