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
        foreignKey: "stages_id",
        as: "events",
        through: StagesEvents
      })

      // set times 
      Stages.hasMany(SetTime, {
        foreignKey: "stages_id",
        as: "set_times"
      })

      
  }
  }
  Stages.init({
    stage_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    stage_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Stages',
    tableName: 'stages',
    timestamps: false
  });
  return Stages;
};