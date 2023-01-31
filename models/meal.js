const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Mealplan extends Model {}

Mealplan.init(
  {
    id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
    time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    calories: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    diet: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    exclusion: {
        type: DataTypes.STRING,
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

module.exports = Mealplan;
