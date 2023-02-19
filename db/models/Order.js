"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      this.belongsTo(models.user);
      this.belongsTo(models.user_address, {
        foreignKey: "delivery_address",
      });
      // as: "delivery_address" caused a naming collision error
      // this.belongsTo(models.user_address, { as: "delivery_address" });
      this.belongsToMany(models.design, { through: "ordered_design" });
      this.belongsToMany(models.colour, { through: "ordered_design" });
      // hasMany is for the 1-M association to query junction model
      this.hasMany(models.ordered_design);
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
