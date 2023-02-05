const addButton = document.querySelector(".add"),
    removeButton = document.querySelector(".remove");
const MAX_CUPS = 10;
const MIN_CUPS = 0;

let cups, liters, percentage;

const currentCupsEl = document.querySelector('.current-cups'),
    currentLitersEl = document.querySelector('.current-liters'),
    currentPercentageEl = document.querySelector('.current-percentage'),
    progressArea = document.querySelector('.progress');

addButton.addEventListener("click", addCup);
removeButton.addEventListener('click', removeCup);


function addCup() {
    if (cups >= MAX_CUPS) {
        return;
    }
    cups++;
    liters += 250;
    percentage = (cups / MAX_CUPS) * 100;
    localStorage.setItem('cups', cups);
    localStorage.setItem('liters', liters);
    localStorage.setItem('percentage', percentage);
    updateLayout();
    if (cups === MAX_CUPS) {
        addButton.disabled = true;
    } else {
        removeButton.disabled = false;
    }
}


function removeCup() {
    if (cups <= MIN_CUPS) {
        return;
    }
    cups--;
    liters -= 250;
    percentage = (cups / MAX_CUPS) * 100;
    localStorage.setItem('cups', cups);
    localStorage.setItem('liters', liters);
    localStorage.setItem('percentage', percentage);
    updateLayout();
    if (cups <= MIN_CUPS) {
        removeButton.disabled = true;
    } else {
        addButton.disabled = false;
    }
}


function updateLayout() {
    const today = new Date().toDateString();
    const lastUpdate = localStorage.getItem('lastUpdate');
    if (today !== lastUpdate) {
        // reset the local storage values
        localStorage.setItem('cups', 0);
        localStorage.setItem('liters', 0);
        localStorage.setItem('percentage', 0);
        // store the current date as the last update date
        localStorage.setItem('lastUpdate', today);
    }

    cups = localStorage.getItem('cups') || 0;
    liters = localStorage.getItem('liters') || 0;
    percentage = localStorage.getItem('percentage') || 0;

    cups = parseInt(cups);
    liters = parseInt(liters);
    percentage = parseInt(percentage);

    currentCupsEl.textContent = `${cups}/10`;
    currentLitersEl.textContent = `${liters / 1000}L/2.5L`;
    currentPercentageEl.textContent = `${percentage}%`;
    progressArea.style.height = `${percentage}%`;
}


// call the updateLayout function when the page loads
updateLayout();
