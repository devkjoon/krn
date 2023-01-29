const express = require('express');
const router = express.Router();
const bmi = require('../../models/bmi');

// GET BMI
router.get(`/bmi/:bmi`, async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    return res.redirect('/login');
  }

  try {
    const userInput = req.params.bmi.split('-');
    const bmiUrl = `https://fitness-calculator.p.rapidapi.com/bmi?age=${userInput[0]}&weight=${userInput[1]}&height=${userInput[2]}`;
    const bmiOptions = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '06ed075c2bmsh028e8aca739c630p1050c5jsn0053a426db18',
        'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
      }
    };
    const response = await fetch(bmiUrl, bmiOptions);
    let stats = await response.json();
    stats = stats.data;
    res.render('bmi', { stats, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.error(err);
    return res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try { 
    const bmiData = await bmi.create({
      age: req.body.age,
      height: req.body.height,
      weight: req.body.weight,
    });
    res.status(200).json(bmiData);
  } catch (err) {
    return res.status(400).json(err);
  }
});

module.exports = router;
