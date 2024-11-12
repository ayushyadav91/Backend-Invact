'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('afterParties', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      location: Sequelize.STRING,
      city: Sequelize.STRING,
      date: Sequelize.DATE,
      ticketPrice: Sequelize.FLOAT,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('afterParties');
  },
};
