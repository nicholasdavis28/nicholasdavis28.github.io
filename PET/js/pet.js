let food = 0;
let money = 0;
let beer = 0;

function foodLeprechaun() {
    console.log("Feeding Leprechaun")
    if (food >= 100) {
        food += 0
    } else {
        food += 10
    }
    console.log("food: " + food)

    refreshUI();
}

function moneyLeprechaun() {
    console.log("Paying Leprechaun")
}

function beerLeprechaun() {
    console.log("Drinking Leprechaun")
}

function refreshUI() {
    let foodMeter = document.getElementById("food-meter");
    foodMeter.value = food;
    let foodParagraph = document.getElementById("food-paragraph")
    foodParagraph.innerHTML = food;
}