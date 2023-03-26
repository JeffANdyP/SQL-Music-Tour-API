//dependencies 
const { Events } = require('pg')
const  { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = new Sequelize(process.env.PG_URI)

//Model 
class Events extends Model {}
ClassName.init ({

})

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

//export 
module.exports = Events 