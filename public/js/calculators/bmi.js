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
      .then(json2 => {

        $("#bmiCont").empty()
        $("#bmiCont").append(bmiDiv)
        
        const bmiContent = 
        `<div class="stat-details">
        <div class="stat-box">
        <h3>Your Current BMI: <span class="stat-output">${json.data.bmi}</span></h3>
        <h3>BMI Status: <span class="stat-output">${json.data.health}</span></h3>
        <h3>Healthy BMI Range: <span class="stat-output">${json.data.healthy_bmi_range}</span></h3>
        <h3>Basal Metabolic Rate: <span class="stat-output">${Math.round(json2.data.BMR)}</span></h3>
        <h3>Daily calories to maintain weight: <span class="stat-output">${Math.round(json2.data.goals["maintain weight"])}</span></h3>
        <h3>Daily calories for mild weight loss: <span class="stat-output">${Math.round(json2.data.goals["Mild weight loss"]["calory"])}</span></h3>
        <h3>Daily calories for weight loss: <span class="stat-output">${Math.round(json2.data.goals["Weight loss"]["calory"])}</span></h3>
        <h3>Daily calories for extreme weight loss: <span class="stat-output">${Math.round(json2.data.goals["Extreme weight loss"]["calory"])}</span></h3>
        <h3>Daily calories for mild weight gain: <span class="stat-output">${Math.round(json2.data.goals["Mild weight gain"]["calory"])}</span></h3>
        <h3>Daily calories for weight gain: <span class="stat-output">${Math.round(json2.data.goals["Weight gain"]["calory"])}</span></h3>
        <h3>Daily calories for extreme weight gain: <span class="stat-output">${Math.round(json2.data.goals["Extreme weight gain"]["calory"])}</span></h3>
        </div>
        </div>`

        console.log(json2)
    
        console.log(bmiContent)
    
        $("#bmiWrap").append(bmiContent)


  })
  .catch(err => console.error('error:' + err));
})}



$(".bmiInputs").on("submit", bmiInput);

//$(".bmiInputs").on("submit", bmiInput, calIntakeInput);
// document.querySelector(".ormInput").addEventListener("submit", newFormHandler);
// document.querySelector(".bmrInput").addEventListener("submit", newFormHandler);
// document.querySelector(".ibwInput").addEventListener("submit", newFormHandler);

