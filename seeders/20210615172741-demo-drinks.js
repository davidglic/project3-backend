'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Drinks', [
      {
          name:'Royal Gin Fizz',
          userID: 1,
          drinkID: 12057
      },
      {
        name:'Gin Swizzle',
          userID: '2',
          drinkID: "11419"
    }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
  }
};
