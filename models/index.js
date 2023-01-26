const User = require('./User');
const Workout = require('./Workout');
const Exercises = require('./Exercises');

Workout.hasMany(Exercises, {
  foreignKey: 'workout_id',
});

Exercises.belongsTo(Workout, {
  foreignKey: 'workout_id',
});

module.exports = { User, Workout, Exercises };
