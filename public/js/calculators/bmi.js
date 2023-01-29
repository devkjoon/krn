// const fetch = require('node-fetch');

const bmiURL = `https://fitness-calculator.p.rapidapi.com/bmi?age=${age}&weight=${weight}&height=${height}`;

const bmi = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '06ed075c2bmsh028e8aca739c630p1050c5jsn0053a426db18',
    'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
  }
};

fetch(bmiURL, bmi)
	.then(res => res.json())
	.then(json => {
    async function newFormHandler(event) {
      event.preventDefault();
      const age = document.querySelector('#age').value;
      const height = document.querySelector('#height').value;
      const weight = document.querySelector('#weight').value;
      // Send fetch request to add a new dish
      const response = await fetch(`/api/bmi`, {
        method: 'POST',
        body: JSON.stringify({
          age,
          height,
          weight,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      //if the dish is added, the 'all' template will be rerendered
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Issue loading results');
      }
    }
    
    document.querySelector('.bmiInput').addEventListener('submit', newFormHandler);
  }
    )
	.catch(err => console.error('error:' + err));






