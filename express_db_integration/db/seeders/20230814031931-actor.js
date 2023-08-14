'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('actor', [
      {first_name: 'Downey', last_name: 'Robert Jr', last_update: new Date(), age: 40},
      {first_name: 'Evans', last_name: 'Chris', last_update: new Date(), age: 41},
      {first_name: 'Ruffalo', last_name: 'Mark', last_update: new Date(), age: 42},
      {first_name: 'Hemsworth', last_name: 'Chris', last_update: new Date(), age: 43},
      {first_name: 'Johansson', last_name: 'Scarlett', last_update: new Date(), age: 44},
      {first_name: 'Renner', last_name: 'Jeremy', last_update: new Date(), age: 45},
      {first_name: 'Cheadle', last_name: 'Don', last_update: new Date(), age: 46},
      {first_name: 'Rudd', last_name: 'Paul', last_update: new Date(), age: 47},
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
