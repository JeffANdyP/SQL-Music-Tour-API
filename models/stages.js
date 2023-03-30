'use strict';
const {
  Model
} = require('sequelize');
// const stages = require('../controllers/stages_controllers');
module.exports = (sequelize, DataTypes) => {
  class Stages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Event, StagesEvents, SetTime }) {
      // events 
      Stages.belongsToMany(Event, {
        foreignKey: "stage_id",
        as: "events",
        through: StagesEvents
      })

      // set times 
      Stages.hasMany(SetTime, {
        foreignKey: "stage_id",
        as: "set_times"
      })
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