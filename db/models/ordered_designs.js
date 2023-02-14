"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ordered_designs extends Model {
    static associate(models) {
      this.belongsTo(models.order, { foreignKey: "order_id" });
      this.belongsTo(models.design, { foreignKey: "design_id" });
      this.belongsTo(models.colour, { foreignKey: "colour_id" });
    }
  }
  Ordered_designs.init(
    {
      order_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "orders",
          key: "id",
        },
      },
      design_id: {
        type: DataTypes.INTEGER,
        references: { model: "designs", key: "id" },
      },
      colour_id: {
        type: DataTypes.INTEGER,
        references: { model: "colours", key: "id" },
      },
      quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ordered_designs",
      underscored: true,
    }
  );
  return Ordered_designs;
};
