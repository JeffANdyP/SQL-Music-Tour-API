// //dependencies 
// const { Events } = require('pg')
// const  { Sequelize, DataTypes, Model } = require('sequelize')
// const sequelize = new Sequelize(process.env.PG_URI)

// //Model 
// class   stages extends Model {}

// Events.init({
//     eve_id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     date: {
//         type: DataTypes.DATE,
//         allowNull: false
//     },
//     start_time: {
//         type: DataTypes.DATE,
//         allowNull: false
//     },
//     end_time: {
//         type: DataTypes.DATE,
//         allowNull: false
//     } 
// }, { 
//     sequelize,
//     modelName: 'Stages',
//     tableName: 'stages',
//     timestamps: false

// })

// //export 
// module.exports = Events 