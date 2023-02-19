"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Colour extends Model {
    static associate(models) {
      this.belongsToMany(models.design, { through: "ordered_designs" });
      this.belongsToMany(models.order, { through: "ordered_designs" });
      // hasMany is for the 1-M association to query junction model
      // this.hasMany(models.ordered_design);
      // the above line crashed the app with the following error
      // Error: colour.hasMany called with something that's not a subclass of Sequelize.Model
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
