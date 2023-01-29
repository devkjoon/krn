const express = require('express');
const router = express.Router();
const userRoutes = require('./user-routes');
const bmiRoutes = require('./bmi-routes');
console.log(bmiRoutes);
router.use('/users', userRoutes);
router.use('/bmi', bmiRoutes);
module.exports = router;
