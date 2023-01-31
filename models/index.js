const User = require('./User');
const Workout = require('./Workout');
const Exercises = require('./Exercises');

Workout.hasMany(Exercises, {
  foreignKey: 'Workout_id',
});

Exercises.belongsTo(Workout, {
  foreignKey: 'Workout_id',
});

module.exports = { User, Workout, Exercises };