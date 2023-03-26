'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Stages.init({
    stages_id: DataTypes.INTEGER,
    stages_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Stages',
  });
  return Stages;
};