"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User_address extends Model {
    static associate(models) {
      this.belongsTo(models.user, { foreignKey: "user_id" });
      this.hasMany(models.order, { foreignKey: "delivery_address" });
    }
  }
  User_address.init(
    {
      // user_address model does not need user_id
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "user_address",
      underscored: true,
    }
  );
  return User_address;
};
