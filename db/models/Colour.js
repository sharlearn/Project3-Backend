"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Colour extends Model {
    static associate(models) {
      this.belongsToMany(models.design, { through: "design_colours" });
    }
  }
  Colour.init(
    {
      colour: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "colour",
      underscored: true,
    }
  );
  return Colour;
};
