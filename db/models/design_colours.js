'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class design_colours extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  design_colours.init({
    design_id: DataTypes.STRING,
    colour_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'design_colours',
  });
  return design_colours;
};