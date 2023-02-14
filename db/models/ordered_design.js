"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ordered_design extends Model {
    static associate(models) {
      this.belongsTo(models.order, { foreignKey: "order_id" });
      this.belongsTo(models.design, { foreignKey: "design_id" });
      this.belongsTo(models.colour, { foreignKey: "colour_id" });
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
