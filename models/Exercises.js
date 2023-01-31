const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Exercises extends Model {}

Exercises.init(
  {
    
    bodyPart: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    equipment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gifUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    target: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Workout_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Workout',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Exercises',
  }
);

module.exports = Exercises;