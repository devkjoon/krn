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

          const goals = document.querySelector('#goals').value;
          const activitylevelSlice = document.querySelector('#activitylevel').value.slice(-1);
          const macroUrl = `https://fitness-calculator.p.rapidapi.com/macrocalculator?age=${age}&gender=${gender}&height=${height}&weight=${weight}&activitylevel=${activitylevelSlice}&goal=${goals}`;
          fetch(macroUrl, options)
            .then(res => res.json())
            .then(json3 => {
              const neck = document.querySelector('#neck').value * 2.54;
              const waist = document.querySelector('#waist').value * 2.54;
              const hip = document.querySelector('#hip').value * 2.54;
              const bodyfat = `https://fitness-calculator.p.rapidapi.com/bodyfat?age=${age}&gender=${gender}&weight=${weight}&height=${height}&neck=${neck}&waist=${waist}&hip=${hip}`
              console.log(neck);
              console.log(waist);
              console.log(hip);
              fetch(bodyfat, options)
                .then(res => res.json())
                .then(json4 => {
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
        <h3>Daily calories for mild weight loss: <span class="stat-output">${Math.round(json2.data.goals["Mild weight loss"]["calory"])} (.5lbs)</span></h3>
        <h3>Daily calories for weight loss: <span class="stat-output">${Math.round(json2.data.goals["Weight loss"]["calory"])} (1.1lbs)</span></h3>
        <h3>Daily calories for extreme weight loss: <span class="stat-output">${Math.round(json2.data.goals["Extreme weight loss"]["calory"])} (2.2lbs)</span></h3>
        <h3>Daily calories for mild weight gain: <span class="stat-output">${Math.round(json2.data.goals["Mild weight gain"]["calory"])} (.5lbs)</span></h3>
        <h3>Daily calories for weight gain: <span class="stat-output">${Math.round(json2.data.goals["Weight gain"]["calory"])} (1.1lbs)</span></h3>
        <h3>Daily calories for extreme weight gain: <span class="stat-output">${Math.round(json2.data.goals["Extreme weight gain"]["calory"])} (2.2lbs)</span></h3>
        <h2>Balanced</h2>
        <h3>Calories: <span class="stat-output">${Math.round(json3.data.calorie)}</span></h3>
        <h3>Protein: <span class="stat-output">${Math.round(json3.data.balanced.protein)}</span></h3>
        <h3>Fat: <span class="stat-output">${Math.round(json3.data.balanced.fat)}</span></h3>
        <h3>Carbs: <span class="stat-output">${Math.round(json3.data.balanced.carbs)}</span></h3>
        <h2>Lowfat</h2>
        <h3>Protein: <span class="stat-output">${Math.round(json3.data.lowfat.protein)}</span></h3>
        <h3>Fat: <span class="stat-output">${Math.round(json3.data.lowfat.fat)}</span></h3>
        <h3>Carbs: <span class="stat-output">${Math.round(json3.data.lowfat.carbs)}</span></h3>
        <h2>Low Carbs</h2>
        <h3>Protein: <span class="stat-output">${Math.round(json3.data.lowcarbs.protein)}</span></h3>
        <h3>Fat: <span class="stat-output">${Math.round(json3.data.lowcarbs.fat)}</span></h3>
        <h3>Carbs: <span class="stat-output">${Math.round(json3.data.lowcarbs.carbs)}</span></h3>
        <h2>High Protein</h2>
        <h3>Protein: <span class="stat-output">${Math.round(json3.data.highprotein.protein)}</span></h3>
        <h3>Fat: <span class="stat-output">${Math.round(json3.data.highprotein.fat)}</span></h3>
        <h3>Carbs: <span class="stat-output">${Math.round(json3.data.highprotein.carbs)}</span></h3>
        <h2>Body Fat</h2>
        <h3>Body Fat (U.S. Navy Method): <span class="stat-output">${json4.data['Body Fat (U.S. Navy Method)']}</span></h3>
        <h3>Body Fat Category: <span class="stat-output">${json4.data['Body Fat Category']}</span></h3>
        <h3>Body Fat Mass: <span class="stat-output">${json4.data['Body Fat Mass']}</span></h3>
        <h3>Lean Body Mass: <span class="stat-output">${json4.data['Lean Body Mass']}</span></h3>
        <h3>Body Fat (BMI method): <span class="stat-output">${json4.data['Body Fat (BMI method)']}</span></h3>
        </div>
        </div>`

                  console.log(json2)
                  console.log(json3)
                  console.log(bmiContent)

                  $("#bmiWrap").append(bmiContent)

                })
            })
        })
        .catch(err => console.error('error:' + err));
    })
}



$(".bmiInputs").on("submit", bmiInput);

//$(".bmiInputs").on("submit", bmiInput, calIntakeInput);
// document.querySelector(".ormInput").addEventListener("submit", newFormHandler);
// document.querySelector(".bmrInput").addEventListener("submit", newFormHandler);
// document.querySelector(".ibwInput").addEventListener("submit", newFormHandler);

