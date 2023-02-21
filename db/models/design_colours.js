"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Design_colours extends Model {
    static associate(models) {
      this.belongsTo(models.design);
      this.belongsTo(models.colour);
      // this.belongsToMany(models.order, { through: "ordered_designs" });
    }
  }
  Design_colours.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "design_colours",
      underscored: true,
      timestamps: false,
    }
  );
  return Design_colours;
};
