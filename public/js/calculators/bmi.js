const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '06ed075c2bmsh028e8aca739c630p1050c5jsn0053a426db18',
    'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
  }
};



// const weight = (req.params.weight / 2.205)
// const height = (req.params.height * 2.54)


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

    // $("#bmiCont").empty()
    $("#bmiCont").append(bmiDiv)
    
    
    const bmiContent = 
    `<div class="bmiCard">
    <p class="ageValue">${json.data.bmi}</p>
    <p class="heightValue">${json.data.health}</p>
    <p class="weightValue">${json.data.healthy_bmi_range}</p>
    </div>`

    console.log(bmiContent)

    $("#bmiWrap").append(bmiContent)
})}

function calIntakeInput(event) {
  event.preventDefault();
  const age = parseInt(document.querySelector('#age').value);
  const gender = document.querySelector('#gender').value;
  const height = parseInt(document.querySelector('#height').value) * 2.54;
  const weight = parseInt(document.querySelector('#weight').value) / 2.205;
  const activitylevel = document.querySelector('#activitylevel').value;
  let calorieintakeurl = `https://fitness-calculator.p.rapidapi.com/dailycalorie?age=${age}&gender=${gender}&height=${height}&weight=${weight}&activitylevel=${activitylevel}`

  fetch(calorieintakeurl, options)
  .then(res => res.json())
  .then(json => {
    
    console.log(json)
    $("#bmiCont").append(bmiDiv)
    
    //bmi content is getting wiped out. Need to change the div. Project for Thursday :) 
    const bmiContent = 
    `<div class="bmiCard">
    <p class="bmrValue">${json.data.BMR}</p>
    <p class="goalsValue">${json.data.goals[0]}</p>
    </div>`

    console.log(bmiContent)

    $("#bmiWrap").append(bmiContent)
})}
// async function basalMetabolicRate(e) {
//   e.preventDefault();

//   const height = document.querySelector('#height2').value;
//   const weight = document.querySelector('#weight3').value;
//   const age = document.querySelector('#age2').value;

//   const bmr = BMR_men(weight, height, age)
//   return bmr
// }

// async function idealBodyWeight(e) {
//   e.preventDefault();

//   const height = document.querySelector('#height3').value;
//   const age = document.querySelector('#age3').value;

//   const ibw =  IBW_men(height, age);
//   return ibw
// }




// const healthDiv = `<div id="bmiInput"></div>`

// async function newFormHandler(event) {
//   event.preventDefault();
//   const age = parseInt(document.querySelector('#age').value);
//   const height = parseInt(document.querySelector('#height').value);
//   const weight = parseInt(document.querySelector('#weight').value);
//   const gender = document.querySelector('#gender').value;
//   const neck = parseInt(document.querySelector('#neck').value);
//   const waist = parseInt(document.querySelector('#waist').value);
//   const hips = parseInt(document.querySelector('#hips').value);
//   const activitylevel = document.querySelector('#activitylevel').value;
//   window.location = `/bmi/${age}/${weight}/${height}`;

// }






$(".bmiInputs").on("submit", bmiInput, calIntakeInput);
// document.querySelector(".ormInput").addEventListener("submit", newFormHandler);
// document.querySelector(".bmrInput").addEventListener("submit", newFormHandler);
// document.querySelector(".ibwInput").addEventListener("submit", newFormHandler);