"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    static associate(models) {
      this.belongsToMany(models.design, { through: "design_themes" });
    }
  }
  Theme.init(
    {
      theme: {
        type: DataTypes.CHAR,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "theme",
      underscored: true,
    }
  );
  return Theme;
};
