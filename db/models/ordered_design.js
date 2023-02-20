"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ordered_design extends Model {
    static associate(models) {
      this.belongsTo(models.order, { foreignKey: "order_id" });
      this.belongsTo(models.design_colours, {
        foreignKey: "design_colours_id",
      });
    }
  }
  Ordered_design.init(
    {
      id: {
        type: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      size: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "ordered_design",
      underscored: true,
    }
  );
  return Ordered_design;
};
