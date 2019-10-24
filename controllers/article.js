const ArticleModel = require("../modules/article");

class articleController {
  /**
   * 创建文章
   */
  static async create(ctx) {
    let req = ctx.request.body;
    if (req.title && req.author && req.content && req.category) {
      try {
        // 创建文章模型
        const ret = await ArticleModel.createArticle(req);
        // 使用刚刚创建的文章ID查询文章详情，且返回文章详情信息
        const data = await ArticleModel.getArticleDetail(ret.id);

        ctx.response.status = 200;
        ctx.body = {
          code: 200,
          msg: '创建文章成功',
          data
        }
      } catch(err) {
        ctx.response.status = 412;
        ctx.body = {
          code: 412,
          msg: '创建文章失败',
          data: err
        }
      }
    } else {
      ctx.response.status = 416;
      ctx.body = {
        code: 200,
        msg: '参数不齐全'
      }
    }
  }

  /**
   * 获取文章详情
   */
  static async detail(ctx) {
    let id = ctx.params.id;

    if (id) {
      try {
        let data = await ArticleModel.getArticleDetail(id);
        ctx.response.status = 200;
        ctx.body = {
          code: 200,
          msg: '查询成功',
          data
        }
      } catch(err) {
        ctx.response.status = 412;
        ctx.body = {
          code: 412,
          msg: '查询失败',
          data
        }
      }
    } else {
      ctx.response.status = 416;
      ctx.body = {
        code: 416,
        msg: '文章ID必须传'
      }
    }
  }

  /**
   * 查询所有
   */
  static async findAll(ctx) {
    try {
      let data = await ArticleModel.getArticleAll()
      ctx.response.status = 200;
      ctx.body = {
        code: 200,
        msg: '查询成功',
        data
      }
    } catch (err) {
      ctx.response.status = 412;
      ctx.body = {
        code: 412,
        msg: '查询失败',
        err
      }
    }
  }
  
  // 删除
  static async delBy(ctx) {
    let id = ctx.params.id
    if(id){
      try {
        await ArticleModel.deteleBy(id)
        let data = await ArticleModel.getArticleAll()
        ctx.response.status = 200
        ctx.body = {
          code: 200,
          msg: '删除成功',
          data
        }
      } catch (err) {
        ctx.response.status = 412;
        ctx.body = {
          code: 412,
          msg: '删除失败',
          err
        }
      }
    } else {
      ctx.response.status = 416;
      ctx.body = {
        code: 416,
        msg: '文章ID必须传'
      }
    }
  }

  // 更新
  static async update(ctx) {
    let req = ctx.request.body;
    let id = ctx.params.id;
    if (id) {
      try {
        // 更新文章模型
        await ArticleModel.update(req, id);
        // 使用刚刚创建的文章ID查询文章详情，且返回文章详情信息
        const data = await ArticleModel.getArticleDetail(id);

        ctx.response.status = 200;
        ctx.body = {
          code: 200,
          msg: '更新文章成功',
          data
        }
      } catch (err) {
        ctx.response.status = 412;
        ctx.body = {
          code: 412,
          msg: '更新文章失败',
          data: err
        }
      }
    } else {
      ctx.response.status = 416;
      ctx.body = {
        code: 200,
        msg: '参数不齐全'
      }
    }
  }
}

module.exports = articleController;