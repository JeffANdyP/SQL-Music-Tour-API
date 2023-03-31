'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate({ Stages, StagesEvents, Meet_greets, SetTime }) {
      // stages
      Events.belongsToMany(Stages, {
        foreignKey: "events_id",
        as: "stages",
        through: StagesEvents
      })
      
      // meet and greets 
      Events.hasMany(Meet_greets, {
        foreignKey: "events_id",
        as: "meet_greets" 
      })

      // set times 
      Events.hasMany(SetTime, {
        foreignKey: "events_id",
        as: "set_times"
      })
    }
  }
  Events.init({
    events_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    start_time: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_time: {
        type: DataTypes.DATE,
        allowNull: false
    } 
}, { 
    sequelize,
    modelName: 'Events',
    tableName: 'events',
    timestamps: false

})
  return Events;
};