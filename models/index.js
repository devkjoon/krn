const User = require('./User');
const Workout = require('./Workout');
const Exercises = require('./Exercises');

Workout.hasMany(Exercises, {
  foreignKey: '',
});

Exercises.belongsTo(Workout, {
  foreignKey: '',
});

module.exports = { User, Workout, Exercises };
