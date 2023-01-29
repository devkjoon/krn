const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class bmi extends Model {}

bmi.init(
  {
    id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
    age: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    weight: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    height: {
      type: DataTypes.DECIMAL,
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

module.exports = bmi;
