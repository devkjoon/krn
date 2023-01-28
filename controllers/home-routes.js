const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Workout, Exercises } = require('../models');

// GET all galleries for homepage
router.get('/', async (req, res) => {
   res.render('welcome');
  try {
    const dbWorkoutData = await Workout.findAll({
      include: [
        {
          model: Exercises,
          attributes: ['filename', 'description'],
        },
      ],
    });

    const workouts = dbWorkoutData.map((workout) =>
      workout.get({ plain: true })
    );

    req.session.save(() => {
      // We set up a session variable to count the number of times we visit the homepage
      if (req.session.countVisit) {
        // If the 'countVisit' session variable already exists, increment it by 1
        req.session.countVisit++;
      } else {
        // If the 'countVisit' session variable doesn't exist, set it to 1
        req.session.countVisit = 1;
      }

      res.render('homepage', {
        workouts,
        // We send over the current 'countVisit' session variable to be rendered
        countVisit: req.session.countVisit,
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one Workout
router.get('/workout/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the Workout
    try {
      const dbWorkoutData = await Workout.findByPk(req.params.id, {
        include: [
          {
            model: Exercises,
            attributes: [
              'id',
              'title',
              'artist',
              'exhibition_date',
              'filename',
              'description',
            ],
          },
        ],
      });
      const workout = dbWorkoutData.get({ plain: true });
      console.log(workout)
      res.render('workout', { workout, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

// GET one Exercises
router.get('/Exercises/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the Exercises
    try {
      const dbExercisesData = await Exercises.findByPk(req.params.id);

      const exercises = dbExercisesData.get({ plain: true });

      res.render('exercises', { exercises, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

// CREATE a new user
router.post('/', async (req, res) => {
  try {
    const newUser = req.body;
    // hash the password from 'req.body' and save to newUser
    newUser.password = await bcrypt.hash(req.body.password, 10);
    // create the newUser with the hashed password and save to DB
    const userData = await User.create(newUser);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/login', (req, res) => {
    res.render('login');
    return;
});

router.get("/signup", (req, res) => {
  res.render("signup");
  return;
})

router.get("/homepage", (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
  res.render("homepage");
  return;
  }
})


module.exports = router;
