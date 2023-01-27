// const fetch = require('node-fetch');

const bodyfatURL = 'https://fitness-calculator.p.rapidapi.com/bodyfat?age=25&gender=male&weight=70&height=178&neck=50&waist=96&hip=92';

const bodyfat = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '06ed075c2bmsh028e8aca739c630p1050c5jsn0053a426db18',
    'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
  }
};

fetch(bodyfatURL, bodyfat)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));