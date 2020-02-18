'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    FirstName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    Username: DataTypes.STRING,
    Password: DataTypes.STRING,
    Email: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    
    User.hasMany(models.Reservations, {
      foreignKey: 'userId'
    })

  };
  return User;
};