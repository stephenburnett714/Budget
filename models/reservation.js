'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define('Reservation', {
    PickUpDate: DataTypes.STRING,
    DropOffDate: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    LocationId: DataTypes.INTEGER
  }, {});
  Reservation.associate = function(models) {
    // associations can be defined here
  };
  return Reservation;
};