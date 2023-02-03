const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '0f00cbf66emshdf2bcb63e49f39cp179d81jsnbb95e24d5dcc',
    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
  }
};

const mealDiv = `<div id="mealWrap"></div>`

function mealPlanGen(event) {
    event.preventDefault();
    const time = document.querySelector('#time').value;
    const calories = parseInt(document.querySelector('#calories').value);
    const diet = document.querySelector('#diet').value;
    const exclusion = document.querySelector('#exclusion').value;
    let url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?timeFrame=${time}&targetCalories=${calories}&diet=${diet}&exclude=${exclusion}'`;

      fetch(url, options)
        .then(res => res.json())
        .then(json => {
          
          console.log(json)
    
          $("#mainCont").empty()
          $("#mainCont").append(mealDiv)
          
          if(time == "Day"){

          for(let i = 0; i < json.meals.length; i ++){

            let foodid = json.meals[i].id
            let imagetype = json.meals[i].imageType
            
            console.log("working?")

          const mealContent = 
          `<div class="mealCard">
          <img src='https://spoonacular.com/recipeImages/${foodid}-312x231.${imagetype}'>
          <p class="mealTitle">${json.meals[i].title}</p>
          <h3>Recipe:</h3>
          <p><a href="${json.meals[i].sourceUrl}" target="_blank">${json.meals[i].sourceUrl}</a></p>
          </div>`
    
          console.log(mealContent)
    
          $("#mealWrap").append(mealContent)
          }} else if (time == "Week") {

            for(let i = 0; i < json.items.length; i ++){
            
              console.log("working?")
            let parsedtitle = JSON.parse(json.items[i].value)
            let foodId = parsedtitle.id
            let imagetype = parsedtitle.imageType

            let url2 = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${parsedtitle.id}/information`;

            fetch(url2, options)
              .then(res => res.json())
              .then(json => {

                var recipeUrl = json.sourceUrl
    
            console.log(parsedtitle)

            const mealContent = 
            `<div class="mealCard">
            <img src='https://spoonacular.com/recipeImages/${foodId}-312x231.${imagetype}'>
            <p>${parsedtitle.title}</p>
            <h3>Recipe:</h3>
            <p><a href="${recipeUrl} target="_blank"">${recipeUrl}</a></p>
            </div>`
      
            console.log(mealContent)
      
            $("#mealWrap").append(mealContent)
          })

            }
            
          }
          
    
        })
        .catch(err => console.error('error:' + err));
    }

  $(".mealplan").on("submit", mealPlanGen);