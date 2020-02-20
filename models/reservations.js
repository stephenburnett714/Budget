'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reservations = sequelize.define('Reservations', {
    pickUpDate: DataTypes.STRING,
    dropOffDate: DataTypes.STRING,
    userId: DataTypes.INTEGER

  }, {});
  Reservations.associate = function(models) {
    
    Reservations.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })


    Reservations.hasMany(models.Car, {
      foreignKey: 'reservationsId'
    })

  };
  return Reservations;
};