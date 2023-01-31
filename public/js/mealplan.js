async function newFormHandler(event) {
    event.preventDefault();
    const time = document.querySelector('#time').value;
    const calories = parseInt(document.querySelector('#calories').value);
    const diet = document.querySelector('#diet').value;
    const exclusion = document.querySelector('#exclusion').value;
    window.location = `/mealplan/${time}/${calories}/${diet}/${exclusion}`;

  }
  
  document.querySelector(".mealplan").addEventListener("submit", newFormHandler);
