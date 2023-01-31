const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Workout, Exercises, Bmi } = require('../models');

const logRequest = (req, res, next) => {
  console.log(`Received ${req.method} request at ${req.url}`);
  next();
};
// Apply the middleware function to all requests
router.use(logRequest);

// GET all galleries for homepage
router.get('/', async (req, res) => {
   res.render('welcome');
  // try {
  //   const dbWorkoutData = await Workout.findAll({
  //     include: [
  //       {
  //         model: Exercises,
  //         attributes: ['filename', 'description'],
  //       },
  //     ],
  //   });

  //   const workouts = dbWorkoutData.map((workout) =>
  //     workout.get({ plain: true })
  //   );

    req.session.save(() => {
      // We set up a session variable to count the number of times we visit the homepage
      if (req.session.countVisit) {
        // If the 'countVisit' session variable already exists, increment it by 1
        req.session.countVisit++;
      } else {
        // If the 'countVisit' session variable doesn't exist, set it to 1
        req.session.countVisit = 1;
      }

  //     res.render('homepage', {
  //       workouts,
  //       // We send over the current 'countVisit' session variable to be rendered
  //       countVisit: req.session.countVisit,
      });
  //   });
  // } catch (err) {
  //   console.log(err);
  //   res.status(500).json(err);
  // }
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
  const bodypartlist = await response.json();
  console.log(bodypartlist)
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
  const targetList = await response.json();
  console.log(targetList)
  res.render('targetList', { targetList, loggedIn: req.session.loggedIn });
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

//Get bmiInput from user
router.get(`/bmiinput/`, async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
  res.redirect('/login');
  } else {
  // If the user is logged in, allow them to view the Exercises
  res.render('bmiinput', { loggedIn: req.session.loggedIn });
  }
  });



// GET BMI
router.get(`/bmi/:bmi`, async (req, res) => {
    // If the user is not logged in, redirect the user to the login page
    if (!req.session.loggedIn) {
    res.redirect('/login');
    } else {
    // If the user is logged in, allow them to view the Exercises
    try {
      const userInput = req.params.bmi.split('-')
// req.query.age work on this
    const bmiurl = `https://fitness-calculator.p.rapidapi.com/bmi?age=${userInput[0]}&weight=${userInput[1]}&height=${userInput[2]}`;
    const bmioptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '06ed075c2bmsh028e8aca739c630p1050c5jsn0053a426db18',
      'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
    }
    };
    const response = await fetch(bmiurl, bmioptions);
    let stats = await response.json();
    stats = stats.data
    console.log(stats);
    res.render('bmi', { stats, loggedIn: req.session.loggedIn });
    } catch (err) {
    console.log(err);
    res.status(500).json(err);
    }
    }
    });

    router.post('/', async (req, res) => {
        try { 
          const bmiData = await Bmi.create({
          age: req.body.age,
          height: req.body.height,
          weight: req.body.weight,
        });
        res.status(200).json(bmiData)
      } catch (err) {
        res.status(400).json(err);
      }
      });


module.exports = router;