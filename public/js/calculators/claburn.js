// const fetch = require('node-fetch');

const calBurnURL = 'https://fitness-calculator.p.rapidapi.com/burnedcalorie?activityid=bi_1&activitymin=25&weight=75';

const calburn = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '06ed075c2bmsh028e8aca739c630p1050c5jsn0053a426db18',
    'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
  }
};

fetch(calBurnURL, calburn)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));