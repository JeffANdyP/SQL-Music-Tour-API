'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up :async (queryInterface, Sequelize) => {
    await queryInterface.createTable('stages_svents', {
      stages_events_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // stages_events_id: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false,
      // },
      stages_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      events_id: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('stages_svents');
  }
};