// const { STRING } = require("sequelize");

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '06ed075c2bmsh028e8aca739c630p1050c5jsn0053a426db18',
    'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
  }
};

async function oneRepMax(e) {
  e.preventDefault();

  const weight = document.querySelector('#weight2').value;
  const reps = document.querySelector('#reps').value;
  
  const result = oneRepMax(weight, reps);
  return result
}

const bmiDiv = `<div id="bmiWrap"></div>`

function bmiInput(event) {
  event.preventDefault();
  const age = parseInt(document.querySelector('#age').value);
  const height = parseInt(document.querySelector('#height').value) * 2.54;
  const weight = parseInt(document.querySelector('#weight').value) / 2.205;
  let url = `https://fitness-calculator.p.rapidapi.com/bmi?age=${age}&weight=${weight}&height=${height}`;

  fetch(url, options)
  .then(res => res.json())
  .then(json => {
    console.log(json)

    const gender = document.querySelector('#gender').value;
    const activitylevel = document.querySelector('#activitylevel').value;
    const calorieUrl = `https://fitness-calculator.p.rapidapi.com/dailycalorie?age=${age}&gender=${gender}&height=${height}&weight=${weight}&activitylevel=${activitylevel}`;



    fetch(calorieUrl, options)
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.error('error:' + err));

      $("#bmiCont").empty()
      $("#bmiCont").append(bmiDiv)
      
      const bmiContent = 
      `<div class="bmiCard">
      <p class="ageValue">${json.data.bmi}</p>
      <p class="heightValue">${json.data.health}</p>
      <p class="weightValue">${json.data.healthy_bmi_range}</p>
      <p class="bmrValue">${json.data.bmr}</p>
      <p class="maintainValue">${json.data.goals}</p>
      </div>`
  
      console.log(bmiContent)
  
      $("#bmiWrap").append(bmiContent)


  })
  .catch(err => console.error('error:' + err));
}


$(".bmiInputs").on("submit", bmiInput);