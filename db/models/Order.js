"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      this.belongsTo(models.user, { as: "buyer" });
      this.belongsTo(models.user_address);
      // as: "delivery_address" caused a naming collision error
      // this.belongsTo(models.user_address, { as: "delivery_address" });
      this.belongsToMany(models.design, { through: "ordered_design" });
    }
  }
  Order.init(
    {
      total_price: DataTypes.INTEGER,
      delivery_address: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      // check if this needs to be buyerId instead of buyer_id
      buyer_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "user",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "order",
      underscored: true,
    }
  );
  return Order;
};
