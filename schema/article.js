const moment = require('moment');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('article', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'title'
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'author'
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'content'
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'category'
    },
    createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
    },
  }, {
    freezeTableName: true
  });
}