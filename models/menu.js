'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Drink extends Model {
    static associate(models) {
      Drink.belongsTo(models.User, {foreignKey: 'userID'})
    }
  };
  Drink.init({
    userID: DataTypes.INTEGER,
    drinkID: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Drink',
  });
  return Drink;
};