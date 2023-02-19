"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Design extends Model {
    static associate(models) {
      this.belongsTo(models.user, { foreignKey: "user_id" });
      this.belongsToMany(models.theme, { through: "design_themes" });
      this.belongsToMany(models.colour, { through: "ordered_designs" });
      this.belongsToMany(models.order, { through: "ordered_designs" });
      // hasMany is for the 1-M association to query junction model
      this.hasMany(models.ordered_design);
    }
  }
  Design.init(
    {
      design_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 50],
          notNull: { msg: "Please enter a design name" },
        },
      },
      image_url: DataTypes.TEXT,
      description: {
        type: DataTypes.STRING,
        validate: {
          len: [0, 300],
        },
      },
      price: {
        type: DataTypes.NUMBER,
        defaultValue: 0,
        validate: {
          isDecimal: true,
        },
      },
    },
    {
      sequelize,
      modelName: "design",
      underscored: true,
    }
  );
  return Design;
};
