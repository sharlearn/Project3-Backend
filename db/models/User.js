"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      this.hasMany(models.design);
      this.hasMany(models.order);
    }
  }
  Users.init(
    {
      username: DataTypes.STRING,
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user",
      underscored: true,
    }
  );
  return Users;
};
