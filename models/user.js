'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    birthday: DataTypes.DATE,
    height: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    calories: DataTypes.FLOAT,
    protein: DataTypes.FLOAT,
    fat: DataTypes.FLOAT
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};