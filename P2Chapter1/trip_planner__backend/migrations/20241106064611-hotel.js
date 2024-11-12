'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('hotels', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        name: Sequelize.STRING,
        location: Sequelize.STRING,
        price_per_night: Sequelize.FLOAT,
        available_rooms: Sequelize.INTEGER,
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
      });
  },
  down: async (queryInterface) => {
      await queryInterface.dropTable('hotels');
  },
};