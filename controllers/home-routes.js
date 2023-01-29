const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Workout, Exercises, bmi } = require('../models');

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

// GET for by body parts
router.get('/Exercises/bodyPartList', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
  res.redirect('/login');
  } else {
  // If the user is logged in, allow them to view the Exercises
  try {
  const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPartList`;
  const options = {
  method: 'GET',
  headers: {
  'X-RapidAPI-Key': '0f00cbf66emshdf2bcb63e49f39cp179d81jsnbb95e24d5dcc',
  'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
  };
  const response = await fetch(url, options);
  const exercises = await response.json();
  console.log(exercises)
  res.render('bodypartlist', { bodypartlist, loggedIn: req.session.loggedIn });
  } catch (err) {
  console.log(err);
  res.status(500).json(err);
  }
  }
  });


// GET by muscle group
router.get('/Exercises/targetList', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
  res.redirect('/login');
  } else {
  // If the user is logged in, allow them to view the Exercises
  try {
  const url = `https://exercisedb.p.rapidapi.com/exercises/targetList`;
  const options = {
  method: 'GET',
  headers: {
  'X-RapidAPI-Key': '0f00cbf66emshdf2bcb63e49f39cp179d81jsnbb95e24d5dcc',
  'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
  };
  const response = await fetch(url, options);
  const exercises = await response.json();
  console.log(exercises)
  res.render('targetList', { targetlist, loggedIn: req.session.loggedIn });
  } catch (err) {
  console.log(err);
  res.status(500).json(err);
  }
  }
  });

// Get by id

router.get('/Exercises/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
  res.redirect('/login');
  } else {
  // If the user is logged in, allow them to view the Exercises
  try {
  const url = `https://exercisedb.p.rapidapi.com/exercises/exercise/${req.params.id}`;
  const options = {
  method: 'GET',
  headers: {
  'X-RapidAPI-Key': '0f00cbf66emshdf2bcb63e49f39cp179d81jsnbb95e24d5dcc',
  'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
  };
  const response = await fetch(url, options);
  const exercises = await response.json();
  console.log(exercises)
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


//Temporary route for exercises
router.get("/exercisemain", (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
  res.render("exercisemain");
  return;
  }
})



