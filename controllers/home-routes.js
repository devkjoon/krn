const router = require('express').Router();
const { Gallery, Painting } = require('../models');

// GET all galleries for homepage
router.get('/', async (req, res) => {
   res.render('welcome');
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
  res.render("homepage");
  return;
})


module.exports = router;
