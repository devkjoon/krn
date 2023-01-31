const User = require('./User');
const Bmi = require('./Bmi');
const { userInfo } = require('os');

User.hasMany(Bmi, {
  foreignKey:0
});


module.exports = { User, Bmi };
