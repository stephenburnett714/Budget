'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cars = sequelize.define('Cars', {
    Make: DataTypes.STRING,
    Model: DataTypes.STRING,
    Size: DataTypes.STRING,
    Quality: DataTypes.INTEGER,
    Mpg: DataTypes.INTEGER,
    Seating: DataTypes.INTEGER,
    Luggage: DataTypes.STRING,
    Price: DataTypes.INTEGER,
    Img: DataTypes.STRING,
    Description: DataTypes.STRING,
    Availability: DataTypes.BOOLEAN,
    LocationId: DataTypes.INTEGER
  }, {});
  Cars.associate = function(models) {
    // associations can be defined here
  };
  return Cars;
};