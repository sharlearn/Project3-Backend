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
      created_at: new Date(),
    },
    {
      sequelize,
      modelName: "theme",
      underscored: true,
    }
  );
  return Themes;
};
