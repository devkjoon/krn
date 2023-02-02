const router = require('express').Router();
const bcrypt = require('bcrypt');
const { Workout, Exercises, Bmi } = require('../models');
const Mealplan = require('../models/meal');
const nodemailer = require("nodemailer")


const logRequest = (req, res, next) => {
  console.log(`Received ${req.method} request at ${req.url}`);
  next();
};
// Apply the middleware function to all requests
router.use(logRequest);

// GET all galleries for homepage
router.get('/', async (req, res) => {
  res.render('welcome');

  req.session.save(() => {
    // We set up a session variable to count the number of times we visit the homepage
    if (req.session.countVisit) {
      // If the 'countVisit' session variable already exists, increment it by 1
      req.session.countVisit++;
    } else {
      // If the 'countVisit' session variable doesn't exist, set it to 1
      req.session.countVisit = 1;
    }
  });

});
//   });
// } catch (err) {
//   console.log(err);
//   res.status(500).json(err);
// }


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
router.get(`/bmi/:age/:weight/:height`, async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the Exercises
    try {
      // const userInput = req.params.bmi.split('-')
      // req.query.age work on this
      const weight = (req.params.weight / 2.205)
      const height = (req.params.height * 2.54)
      const bmiurl = `https://fitness-calculator.p.rapidapi.com/bmi?age=${req.params.age}&weight=${weight}&height=${height}`;
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

//calorie intake
router.get(`/bmi/:age/:gender/:weight/:height/:activitylevel/`, async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the Exercises
    try {
      // converting to inches and lbs
      const weight = (req.params.weight / 2.205)
      const height = (req.params.height * 2.54)
      const calorieIntakeOptionsurl = `https://fitness-calculator.p.rapidapi.com/dailycalorie?age=${req.params.age}&gender=${req.params.gender}&height=${height}&weight=${weight}&activitylevel=${req.params.activitylevel}`
      const calorieIntakeOptions = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '06ed075c2bmsh028e8aca739c630p1050c5jsn0053a426db18',
          'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
        }
      };
      const response = await fetch(calorieIntakeOptionsurl, calorieIntakeOptions);
      let calintake = await response.json();
      calintake = calintake.data
      console.log(calintake);
      res.render('bmi', { calintake, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

router.post('/', async (req, res) => {
  try {
    const calintakeData = await Calintake.create({
      age: req.body.age,
      gender: req.body.gender,
      height: req.body.height,
      weight: req.body.weight,
      activitylevel: req.body.activitylevel,
    });
    res.status(200).json(calintakeData)
  } catch (err) {
    res.status(400).json(err);
  }
});

      // let idealWeight = `https://fitness-calculator.p.rapidapi.com/idealweight?gender=${gender}&height=${height}`




      //Get bmiInput from user
      router.get(`/mealplan/`, async (req, res) => {
        // If the user is not logged in, redirect the user to the login page
        if (!req.session.loggedIn) {
          res.redirect('/login');
        } else {
          // If the user is logged in, allow them to view the Exercises
          res.render('mealplan', { loggedIn: req.session.loggedIn });
        }
      });

      // GET BMI


      // GET BMI
      router.get(`/mealplan/:time/:calories/:diet/:exclsuion`, async (req, res) => {
        // If the user is not logged in, redirect the user to the login page
        if (!req.session.loggedIn) {
          res.redirect('/login');
        } else {
          // If the user is logged in, allow them to view the Exercises
          try {
            // const userInput = req.params.bmi.split('-')
            // req.query.age work on this
            const mealurl = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?timeFrame=${time}&targetCalories=${calories}&diet=${diet}&exclude=${exclusion}`;
            const mealoptions = {
              method: 'GET',
              headers: {
                'X-RapidAPI-Key': '0f00cbf66emshdf2bcb63e49f39cp179d81jsnbb95e24d5dcc',
                'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
              }
            };
            const response = await fetch(mealurl, mealoptions);
            let stats = await response.json();
            stats = stats.data
            res.render('mealplan', { stats, loggedIn: req.session.loggedIn });
          } catch (err) {
            console.log(err);
            res.status(500).json(err);
          }
        }
      });

      router.post('/', async (req, res) => {
        try {
          const mealPlanData = await Mealplan.create({
            time: req.body.time,
            calories: req.body.calories,
            diet: req.body.diet,
            exclusion: req.body.exclusion
          });
          res.status(200).json(mealPlanData)
        } catch (err) {
          res.status(400).json(err);
        }
      });

      router.get("/mail/:username/:message/:email/:phone", (req, res) => {

        async function main() {
        
          // create reusable transporter object using the default SMTP transport
          let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: "liamallen343@gmail.com", 
              pass: "cxxxfwhljhtvqquo", 
            },
          });
        
          let info = await transporter.sendMail({
            from: `"${req.params.username}" <krnhealthwellness@gmail.com>`, 
            to: "countryplayzyt@gmail.com", 
            subject: `Customer Message | ${req.params.email} | ${req.params.phone}`, 
            text: `${req.params.message}`, 
          });
        
          console.log("Message sent: %s", info.messageId);
        }
        
        main().catch(console.error);

      })
  


      module.exports = router;