const Router = require('koa-router');
const ArtileController = require('../controllers/article');

const router = new Router({
  prefix: '/api/v1'
});

router.post('/article/create', ArtileController.create)

router.get('/article/:id', ArtileController.detail)

module.exports = router