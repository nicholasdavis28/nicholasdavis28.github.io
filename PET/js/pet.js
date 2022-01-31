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
    if (money >= 100) {
        money += 0
    } else {
        money += 10
    }
    console.log("money: " + money)

    refreshUI();
}

function beerLeprechaun() {
    console.log("Drinking Leprechaun")
    if (beer >= 100) {
        beer += 0
    } else {
        beer += 10
    }
    console.log("beer: " + beer)

    refreshUI();
}

function refreshUI() {
    let foodMeter = document.getElementById("food-meter");
    foodMeter.value = food;
    let foodParagraph = document.getElementById("food-paragraph")
    foodParagraph.innerHTML = food;
    let moneyMeter = document.getElementById("money-meter");
    moneyMeter.value = money;
    let moneyParagraph = document.getElementById("money-paragraph")
    moneyParagraph.innerHTML = money;
    let beerMeter = document.getElementById("beer-meter");
    beerMeter.value = beer;
    let beerParagraph = document.getElementById("beer-paragraph")
    beerParagraph.innerHTML = beer;
}

myInterval = setInterval(foodTime, 5000)
myInterval = setInterval(moneyTime, 5000)
myInterval = setInterval(beerTime, 5000)


function foodTime() {
    if (food > 0) {
        food = food - 10
    }
    refreshUI();
}

function moneyTime() {
    if (money > 0) {
        money = money - 10
    }
    refreshUI();
}

function beerTime() {
    if (beer > 0) {
        beer = beer - 10
    }
    refreshUI();
}