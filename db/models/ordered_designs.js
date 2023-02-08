"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ordered_designs extends Model {
    static associate(models) {
      this.belongsTo(models.order, { foreignKey: "order_id" });
      this.belongsTo(models.design, { foreignKey: "design_id" });
      this.belongsTo(models.colours, { foreignKey: "colour_id" });
    }
  }
  Design_themes.init(
    {
      order_id: DataTypes.INTEGER,
      design_id: DataTypes.INTEGER,
      colour_id: DataTypes.INTEGER,
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
