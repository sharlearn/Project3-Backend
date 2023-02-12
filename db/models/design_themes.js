"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Design_themes extends Model {
    static associate(models) {
      this.belongsTo(models.design, { foreignKey: "design_id" });
      this.belongsTo(models.theme, { foreignKey: "theme_id" });
    }
  }
  Design_themes.init(
    {
      design_id: {
        type: DataTypes.INTEGER,
        references: { model: "designs", key: "id" },
      },
      theme_id: {
        type: DataTypes.INTEGER,
        references: { model: "themes", key: "id" },
      },
    },
    {
      sequelize,
      modelName: "design_themes",
      underscored: true,
    }
  );
  return Design_themes;
};
