'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Meet_greets extends Model {
        /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    
    static associate({ Band, Events }) {
      // band
      Meet_greets.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band"
      })

      // event
      Meet_greets.belongsTo(Events, {
        foreignKey: "events_id",
        as: "events"
      })
    }
  }
Meet_greets.init({
  meet_greet_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
      type: DataTypes.STRING,
      allowNull: false
  },
  band_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  events_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  meet_start_time: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  meet_end_time: {
    type: DataTypes.DATE,
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'Band',
  tableName: 'bands',
  timestamps: false
})

  return Meet_greets;
};