'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reservations = sequelize.define('Reservations', {
    pickUpDate: DataTypes.STRING,
    dropOffDate: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    locationId: DataTypes.INTEGER,
    carId: DataTypes.INTEGER
  }, {});
  Reservations.associate = function(models) {
    
    Reservations.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })


    Reservations.hasMany(models.Car, {
      foreignKey: 'carId'
    })

  };
  return Reservations;
};