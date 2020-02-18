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
        availability: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
