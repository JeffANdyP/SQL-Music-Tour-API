'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Set_Time extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Band, Events, Stages}) {
      Set_Time.belongsTo(Band, {
        foreignKey: 'band_id',
        as: 'band'
      })

      Set_Time.belongsTo(Events, {
        foreignKey: 'events_id',
        as: 'events'
      })

      Set_Time.belongsTo(Stages, {
        foreignKey: 'stages_id',
        as: 'stages'
      })
    }
  }
  Set_Time.init({
    set_time_id: {
      type: DataTypes.INTEGER, 
      primaryKey: true,
      autoIncrement: true
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    stage_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    band_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Set_Times',
    tableName: 'set_times',
    timestamps: false
  })
  return Set_Time;
};