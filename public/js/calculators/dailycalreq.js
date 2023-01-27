// const fetch = require('node-fetch');

const dcrurl = 'https://fitness-calculator.p.rapidapi.com/dailycalorie?age=25&gender=male&height=180&weight=70&activitylevel=level_1';

const dailycalreq = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '06ed075c2bmsh028e8aca739c630p1050c5jsn0053a426db18',
    'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
  }
};

fetch(dcrurl, dailycalreq)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));