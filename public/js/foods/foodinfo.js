// const fetch = require('node-fetch');

const foodinfoURL = 'https://fitness-calculator.p.rapidapi.com/food?foodid=SR25_1_1';

const foodinfo = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '06ed075c2bmsh028e8aca739c630p1050c5jsn0053a426db18',
    'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
  }
};

fetch(foodinfoURL, foodinfo)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));