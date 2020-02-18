'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Cars', [{
        make: "Ford",
        model: "Fiesta",
        size: "Economy",
        quality: 1,
        mpg: 27,
        seating: 5,
        luggage: "1 Large Bag, 1 Small Bag",
        price: 117,
        frontImg: "img",
        backImg: "N/a",
        sideImg: "N/a",
        description: "info",
        availability: true,
        reservationsId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        make: "Ford",
        model: "Focus",
        size: "Compact",
        quality: 1,
        mpg: 24,
        seating: 5,
        luggage: "1 Large Bag, 2 Small Bag",
        price: 117,
        frontImg: "img",
        backImg: "N/a",
        sideImg: "N/a",
        description: "info",
        reservationsId: 0,
        availability: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cars', null, {});
  }
};
