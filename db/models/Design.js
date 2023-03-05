"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Design extends Model {
    static associate(models) {
      this.belongsTo(models.user, { foreignKey: "user_id" });
      this.belongsToMany(models.theme, { through: "design_themes" });
      this.belongsToMany(models.colour, { through: "design_colours" });
    }
  }
  Design.init(
    {
      design_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { // nice use of validate here, is that also added on the migration? I shall see :)!
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
