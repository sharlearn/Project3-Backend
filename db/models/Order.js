"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      this.belongsTo(models.user, { foreignKey: "user_id" });
      this.belongsTo(models.user_address, {
        foreignKey: "delivery_address",
      });
      // as: "delivery_address" caused a naming collision error
      // this.belongsTo(models.user_address, { as: "delivery_address" });
      this.belongsToMany(models.design_colours, { through: "ordered_designs" });
    }
  }
  Order.init(
    {
      // order model does not need id
      total_price: DataTypes.INTEGER,
      delivery_address: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "user_address",
          key: "id",
        },
      },
      status: DataTypes.STRING,
      // check if this needs to be buyerId instead of buyer_id
      user_id: {
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
