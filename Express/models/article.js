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
        foreignKey: "articleId",
      })
    }
  }
  Article.init({
    header: DataTypes.STRING,
    subHeader: DataTypes.STRING,
    description: DataTypes.STRING,
    datePosted: DataTypes.DATE,
    postedBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};
