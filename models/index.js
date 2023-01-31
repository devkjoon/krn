const User = require('./User');
const Bmi = require('./Bmi');
const { userInfo } = require('os');

User.hasMany(Bmi, {
  foreignKey:0
});
const Workout = require('./Workout');
const Exercises = require('./Exercises');

Workout.hasMany(Exercises, {
  foreignKey: 'Workout_id',
});

Exercises.belongsTo(Workout, {
  foreignKey: 'Workout_id',
});

module.exports = { User, Bmi };
