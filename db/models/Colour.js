"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Colour extends Model {
    static associate(models) {
      this.belongsToMany(models.design, { through: "ordered_designs" });
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
