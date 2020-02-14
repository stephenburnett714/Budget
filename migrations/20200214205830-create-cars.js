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
      Make: {
        type: Sequelize.STRING
      },
      Model: {
        type: Sequelize.STRING
      },
      Size: {
        type: Sequelize.STRING
      },
      Quality: {
        type: Sequelize.INTEGER
      },
      Mpg: {
        type: Sequelize.INTEGER
      },
      Seating: {
        type: Sequelize.INTEGER
      },
      Luggage: {
        type: Sequelize.STRING
      },
      Price: {
        type: Sequelize.INTEGER
      },
      Img: {
        type: Sequelize.STRING
      },
      Description: {
        type: Sequelize.STRING
      },
      Availability: {
        type: Sequelize.BOOLEAN
      },
      LocationId: {
        type: Sequelize.INTEGER
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Cars');
  }
};