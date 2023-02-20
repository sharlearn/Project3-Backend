"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ordered_design extends Model {
    static associate(models) {
      // this.belongsTo(models.order);
      // this.belongsTo(models.design);
      // this.belongsTo(models.colour);
    }
  }
  Ordered_design.init(
    {
      order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "order",
          key: "id",
        },
      },
      design_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "design",
          key: "id",
        },
      },
      colour_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "colour",
          key: "id",
        },
      },
      quantity: {
        type: DataTypes.INTEGER,
        // allowNull: false,
      },
      // size: {
      //   type: DataTypes.STRING,
      //   allowNull: false,
      // },
    },
    {
      sequelize,
      modelName: "ordered_design",
      underscored: true,
    }
  );
  return Ordered_design;
};
