// const fetch = require('node-fetch');

const foodnamesURL = 'https://fitness-calculator.p.rapidapi.com/foodids?subtablename=Fo1_2';

const foodnames = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '06ed075c2bmsh028e8aca739c630p1050c5jsn0053a426db18',
    'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
  }
};

fetch(foodnamesURL, foodnames)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));