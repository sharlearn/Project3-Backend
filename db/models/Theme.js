"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Themes extends Model {
    static associate(models) {
      this.belongsToMany(models.design, { through: "design_themes" });
    }
  }
  Themes.init(
    {
      theme: DataTypes.CHAR,
    },
    {
      sequelize,
      modelName: "theme",
      underscored: true,
    }
  );
  return Themes;
};
