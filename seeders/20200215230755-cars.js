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
        luggage: "4",
        price: 60,
        frontImg: "img",
        backImg: "N/a",
        sideImg: "N/a",
        description: "info",
        availability: true,
        reservationsId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }, 
      {
        make: "Honda",
        model: "Civic",
        size: "Economy",
        quality: 1,
        mpg: 32,
        seating: 5,
        luggage: "5",
        price: 60,
        frontImg: "img",
        backImg: "N/a",
        sideImg: "N/a",
        description: "info",
        availability: true,
        reservationsId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        make: "Nissan",
        model: "Sentra",
        size: "Economy",
        quality: 1,
        mpg: 29,
        seating: 5,
        luggage: "4",
        price: 60,
        frontImg: "img",
        backImg: "N/a",
        sideImg: "N/a",
        description: "info",
        availability: true,
        reservationsId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        make: "Ford",
        model: "Focus",
        size: "Compact",
        quality: 1,
        mpg: 24,
        seating: 5,
        luggage: "5",
        price: 60,
        frontImg: "img",
        backImg: "N/a",
        sideImg: "N/a",
        description: "info",
        reservationsId: null,
        availability: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        make: "Toyota",
        model: "Corolla",
        size: "Compact",
        quality: 1,
        mpg: 29,
        seating: 5,
        luggage: "4",
        price: 60,
        frontImg: "img",
        backImg: "N/a",
        sideImg: "N/a",
        description: "info",
        reservationsId: null,
        availability: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        make: "Subaru",
        model: "Impreza",
        size: "Compact",
        quality: 1,
        mpg: 22,
        seating: 5,
        luggage: "5",
        price: 60,
        frontImg: "img",
        backImg: "N/a",
        sideImg: "N/a",
        description: "info",
        reservationsId: null,
        availability: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cars', null, {});
  }
};
