const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class bmi extends Model {}

bmi.init(
  {
    
    age: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    weight: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    height: {
      type: DataTypes.NUMBER,
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