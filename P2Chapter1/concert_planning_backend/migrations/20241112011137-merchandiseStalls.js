'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('merchandiseStalls', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      stallName: Sequelize.STRING,
      itemAvailable: Sequelize.STRING,
      price: Sequelize.FLOAT,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('merchandiseStalls');
  },
};
