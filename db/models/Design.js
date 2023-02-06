"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Design extends Model {
    static associate(models) {
      this.belongsTo(models.user);
      this.belongsToMany(models.theme, { through: "design_themes" });
    }
  }
  Design.init(
    {
      design_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 30],
          notNull: { msg: "Please enter a design name" },
        },
      },
      user_id: {
        type: DataTypes.UUID,
        references: {
          model: "users",
          key: "id",
        },
      },
      image_url: DataTypes.STRING,
      description: {
        type: DataTypes.STRING,
        validate: {
          len: [0, 200],
        },
      },
      price: {
        type: DataTypes.NUMBER,
        defaultValue: 0,
        validate: {
          isDecimal: true,
        },
      },
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "design",
      underscored: true,
    }
  );
  return Design;
};
