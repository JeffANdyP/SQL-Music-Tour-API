'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('meet_greets', {
      meet_greets_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // meet_greets: {
      //   type: Sequelize.INTEGER,
      //   allowNull:false,
      // },
      band_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      events_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      meet_start_time: {
        type: Sequelize.DATE,
        allowNull:false,
      },
      meet_end_time: {
        type: Sequelize.DATE,
        allowNull:false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('meet_greets');
  }
};