// const fetch = require('node-fetch');

const bmiURL = 'https://body-mass-index-bmi-calculator.p.rapidapi.com/imperial?weight=150&height=68';

const bmi = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '06ed075c2bmsh028e8aca739c630p1050c5jsn0053a426db18',
    'X-RapidAPI-Host': 'body-mass-index-bmi-calculator.p.rapidapi.com'
  }
};

fetch(bmiURL, bmi)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));






    
// fetch('https://body-mass-index-bmi-calculator.p.rapidapi.com/imperial?weight=150&height=68', {
//     method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '06ed075c2bmsh028e8aca739c630p1050c5jsn0053a426db18',
//     'X-RapidAPI-Host': 'body-mass-index-bmi-calculator.p.rapidapi.com'
// },
// })
// .then(response => response.json())
// .then(json => console.log(json))