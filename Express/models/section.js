'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Section extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Section.belongsTo(models.Article, {
        foreignKey: "article_id",
        onDelete: "CASCADE"
      })
    }
  }
  Section.init({
    header: DataTypes.STRING,
    body: DataTypes.TEXT,
    article_id: DataTypes.INTEGER,
    picture_url: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Section',
    tableName: 'sections',
    underscore: true,
    timestamps: false,
  });
  return Section;
};
