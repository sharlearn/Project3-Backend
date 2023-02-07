"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    static associate(models) {
      this.belongsTo(models.user, { as: "buyer" });
      this.belongsTo(models.user_addresses, { as: "delivery_address" });
      this.belongsToMany(models.design, { through: "ordered_designs" });
    }
  }
  Orders.init(
    {
      total_price: DataTypes.INTEGER,
      delivery_address: DataTypes.CHAR,
    },
    {
      sequelize,
      modelName: "order",
      underscored: true,
    }
  );
  return Orders;
};
