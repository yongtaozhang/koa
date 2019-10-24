const db = require('../config/db');
const Sequelize = db.sequelize;
const Article = Sequelize.import('../schema/article');

Article.sync({force: false });

class ArticleModel {
  /**
   * 创建文章模型
   */
  static async createArticle(data) {
    return await Article.create({
      title: data.title,
      author: data.author,
      content: data.content,
      category: data.category
    });
  }

  /**
   * 查询文章的详情
   */
  static async getArticleDetail(id) {
    return await Article.findOne({
      where: {
        id
      }
    });
  }

  /**
   * 查询所有
   */
  static async getArticleAll() {
    return await Article.findAll()
  }

  // 删除
  static async deteleBy(id) {
    return await Article.destroy({
      where: {
        id
      }
    })
  }

  // 更新
  static async update(params, id) {
    return await Article.update(params, {
      where: {
        id: id
      }
    })
  }
}

module.exports = ArticleModel