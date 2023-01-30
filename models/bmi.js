const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Bmi extends Model {}

Bmi.init(
  {
    id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  { 
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'bmi',
  }
);

module.exports = Bmi;
