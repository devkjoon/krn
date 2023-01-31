const sequelize = require('../config/connection');
// const seedWorkout = require('./workoutData');
// const seedExercises = require('./exercisesData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  // await seedWorkout();

  // await seedExercises();

  process.exit(0);
};

seedAll();
