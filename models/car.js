'use strict';
module.exports = (sequelize, DataTypes) => {
  const Car = sequelize.define('Car', {
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    size: DataTypes.STRING,
    quality: DataTypes.INTEGER,
    mpg: DataTypes.INTEGER,
    seating: DataTypes.INTEGER,
    luggage: DataTypes.STRING,
    price: DataTypes.INTEGER,
    frontImg: DataTypes.STRING,
    backImg: DataTypes.STRING,
    sideImg: DataTypes.STRING,
    description: DataTypes.STRING,
    availability: DataTypes.BOOLEAN,
    reservationsId: DataTypes.INTEGER
  }, {});
  Car.associate = function(models) {

    Car.belongsTo(models.Reservations, {
      foreignKey: 'reservationsId',
      onDelete: 'CASCADE'
    })
    
  };
  return Car;
};