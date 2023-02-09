"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Design_themes extends Model {
    static associate(models) {
      this.belongsTo(models.design, { foreignKey: "design_id" });
      this.belongsTo(models.theme, { foreignKey: "themes_id" });
    }
  }
  Design_themes.init(
    {
      theme_id: DataTypes.INTEGER,
      design_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "design_themes",
      underscored: true,
    }
  );
  return Design_themes;
};
