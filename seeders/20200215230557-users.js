'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [{
        FirstName: 'John',
        LastName: 'Jacob',
        Username: 'johnj123',
        Password: 'password',
        Email: 'johnjacob@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        FirstName: 'Abraham',
        LastName: 'Lincon',
        Username: 'deadprez16',
        Password: 'password',
        Email: 'lincon123@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
 
      return queryInterface.bulkDelete('Users', null, {});
  }
};
