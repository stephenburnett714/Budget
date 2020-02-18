'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Cars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      make: {
        type: Sequelize.STRING
      },
      model: {
        type: Sequelize.STRING
      },
      size: {
        type: Sequelize.STRING
      },
      quality: {
        type: Sequelize.INTEGER
      },
      mpg: {
        type: Sequelize.INTEGER
      },
      seating: {
        type: Sequelize.INTEGER
      },
      luggage: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      frontImg: {
        type: Sequelize.STRING
      },
      backImg: {
        type: Sequelize.STRING
      },
      sideImg: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      availability: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      reservationsId: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Cars');
  }
};