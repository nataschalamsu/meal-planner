'use strict';
module.exports = (sequelize, DataTypes) => {
  var Food = sequelize.define('Food', {
    name: DataTypes.STRING,
    info: DataTypes.STRING,
    energy: DataTypes.FLOAT,
    carbohydrate: DataTypes.FLOAT,
    fat: DataTypes.FLOAT,
    protein: DataTypes.FLOAT
  }, {});
  Food.associate = function(models) {
    // associations can be defined here
  };
  return Food;
};