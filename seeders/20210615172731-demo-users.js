'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
          name:'David lewis',
          username: 'david',
          password: "word",
          email: "david_lewis@glic.com"
      },
      {
        name:'Pachel Pederson',
        username: 'Pachel',
        password: "pass",
        email: "papeders@up.com"
    }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
