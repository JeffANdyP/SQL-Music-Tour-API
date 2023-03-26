'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stages_Events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Stages_Events.init({
    stages_events_id: DataTypes.INTEGER,
    stages_id: DataTypes.INTEGER,
    events_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Stages_Events',
  });
  return Stages_Events;
};