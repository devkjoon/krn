const addButton = document.querySelector(".add"),
    removeButton = document.querySelector('.remove');
const MAX_CUPS = 10;
const MIN_CUPS = 0;

let cups = 0,
    liters = 0,
    percentage = 0;

const currentCupsEl = document.querySelector('.current-cups'),
    currentLitersEl = document.querySelector('.current-liters'),
    currentPercentageEl = document.querySelector('.current-percentage'),
    progressArea = document.querySelector('.progress');

addButton.addEventListener("click", addCup);
removeButton.addEventListener('click', removeCup);

function addCup() {
    cups++;
    liters += 250;
    percentage = (cups / MAX_CUPS) * 100;
    updateLayout();
    if (cups === MAX_CUPS) {
        addButton.disabled = true;
    } else {
        removeButton.disabled = false;
    }
}

function removeCup() {
    cups--;
    liters -= 250;
    percentage = (cups / MAX_CUPS) * 100;
    updateLayout();
    if (cups === MIN_CUPS) {
        removeButton.disabled = true;
    } else {
        addButton.disabled = false;
    }
}

function updateLayout() {
    currentCupsEl.textContent = `${cups}/10`;
    currentLitersEl.textContent = `${liters / 1000}L/2.5L`;
    currentPercentageEl.textContent = `${percentage}%`;
    progressArea.getElementsByClassName.height = `${percentage}%`;
}
