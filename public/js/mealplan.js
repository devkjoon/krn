const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '0f00cbf66emshdf2bcb63e49f39cp179d81jsnbb95e24d5dcc',
    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
  }
};

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
    
          $("#mealWrap").empty()
          
          if(time == "day"){

          for(let i = 0; i < json.meals.length; i ++){
            
            console.log("working?")

          const mealContent = 
          `<div class="mealCard">
          <p>${json.meals[i].title}</p>
          <p>${json.meals[i].sourceUrl}</p>
          </div>`
    
          console.log(mealContent)
    
          $("#mealWrap").append(mealContent)
          }} else if (time == "week") {
            for(let i = 0; i < json.items.length; i ++){
            
              console.log("working?")
            let parsedtitle = JSON.parse(json.items[i].value)

            console.log(parsedtitle)

            const mealContent = 
            `<div class="mealCard">
            <p>${parsedtitle.title}</p>
            
            </div>`
      
            console.log(mealContent)
      
            $("#mealWrap").append(mealContent)
            }
          }
    
        })
        .catch(err => console.error('error:' + err));
    }

  $(".mealplan").on("submit", mealPlanGen);