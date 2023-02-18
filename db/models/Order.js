"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      this.hasOne(models.user);
      // this.belongsTo(models.user, { foreignKey: "user_id" });
      // this.belongsTo(models.user, { as: "buyer", foreignkey: "buyer_id" });
      this.belongsTo(models.user_address, { foreignKey: "delivery_address" });
      // getting rid of this.belongTo(models.user_address); and changing it to
      // this.hasOne(models.user_address); removes user_address_id from being inserted
      // this.belongsTo(models.user_address);
      // as: "delivery_address" caused a naming collision error
      // this.belongsTo(models.user_address, { as: "delivery_address" });
      this.belongsToMany(models.design, { through: "ordered_design" });
    }
  }
  Order.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      total_price: DataTypes.INTEGER,
      delivery_address: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      // check if this needs to be buyerId instead of buyer_id
      // buyer_id: {
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
