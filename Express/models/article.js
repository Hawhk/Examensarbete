'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Article.hasMany(models.Section, {
        foreignKey: "article_id",
        
      })
    }
  }
  Article.init({
    header: DataTypes.STRING,
    sub_header: DataTypes.STRING,
    description: DataTypes.STRING,
    date_posted: DataTypes.DATE,
    posted_by: DataTypes.STRING,
    picture_url: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Article',
    tableName: 'articles',
    underscore: true,
    timestamps: false,
  });
  return Article;
};
