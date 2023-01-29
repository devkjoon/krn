const User = require('./User');
const bmi = require('./bmi');
const { userInfo } = require('os');

User.hasMany(bmi, {
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

module.exports = { User, bmi };
