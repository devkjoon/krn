const User = require('./User');
const Bmi = require('./bmi');
const { userInfo } = require('os');

User.hasMany(Bmi, {
  foreignKey:0
});


module.exports = { User, Bmi };
