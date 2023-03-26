'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('events', {
      events_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // events_id: {
      //   allowNull: false,
      //   type: Sequelize.INTEGER
      // },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      date: {allowNull: false,
        type: Sequelize.DATE
      },
      start_time: {
        allowNull: false,
        type: Sequelize.DATE
      },
      end_time: {
        allowNull: false,
        type: Sequelize.DATE
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
    await queryInterface.dropTable('events');
  }
};