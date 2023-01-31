// const fetch = require('node-fetch');
const fitness = require("fitness-calc");

async function newFormHandler(event) {
  event.preventDefault();
  const age = parseInt(document.querySelector('#age').value);
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  window.location=`/bmi/${age}-${weight}-${height}`;
  // const bmiURL = `https://fitness-calculator.p.rapidapi.com/bmi?age=${age}&weight=${weight}&height=${height}`;
  // const bmi = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': '06ed075c2bmsh028e8aca739c630p1050c5jsn0053a426db18',
  //     'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
    // }
  // };

  // fetch(bmiURL, bmi)
  //   .then(res => res.json())
  //   .then(async json => {
  //     console.log(json);
  //    // Send fetch request 
  //     try{
  //     const response = await fetch(`/bmi`, {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         age,
  //         height,
  //         weight,
  //       }),
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });
  //     if (response.ok) {
  //       document.location.replace('/');
  //     } else {
  //       alert('Issue loading results');
  //     }
  //   } catch(err) {
  //     console.log(err);
  //   }
  //   })
  //   .catch(err => {
  //     console.error('error:' + err)
  //   });
}

document.querySelector(".bmiInput").addEventListener("submit", newFormHandler);
