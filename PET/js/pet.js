let food = 0;
let money = 0;
let beer = 0;
let mood = 0;
let wealth = 0;
let drunk = 0;
let hunger = 0;


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
    let petImg = document.getElementById("pet-img");
    let petParagraph = document.getElementById("pet-condition")
    if (beer >= 80) {
        petImg.src = "image/drunkleprechaun.jpg"
        petParagraph.innherHTML = "Leprechaun is drunk!"
    } else if (money >= 80 && food >= 80 && beer >= 50) {
        petImg.src = "image/richleprechaun.jpg"
        petParagraph.innherHTML = "Leprechaun has become a god!"
    } else if (money >= 50 && food >= 50 && beer >= 30) {
        petImg.src = "image/leprechaun.jpg"
        petParagraph.innherHTML = "Leprechaun is living life!"
    } else if (food >= 80 && beer <= 50 && money <= 50) {
        petImg.src = "image/fatleprechaun.jpg"
        petParagraph.innherHTML = "Leprechaun has put on some pounds!"
    } else if (food <= 50 && beer <= 50 && money <= 50) {
        petImg.src = "image/sadleprechaun.jpg"
        petParagraph.innherHTML = "Leprechaun is upset!"
    } else if (beer >= 50) {
        petImg.src = "image/tipsyleprechaun.jpg"
        petParagraph.innherHTML = "Leprechaun is tipsy downing pints in the pub with his friends!"
    } else {
        petImg.src = "image/leprechaun.jpg"
        petParagraph.innerHTML = "Leprechaun is waiting!"
    }
}

myInterval = setInterval(petTimer, 1000)
myInterval = setInterval(leprechaunStatus, 1)
myInterval = setInterval(leprechaunHunger, 1)
myInterval = setInterval(leprechaunWealth, 1)
myInterval = setInterval(leprechaunDrunkness, 1)

function petTimer() {
    if (food > 0) {
        food = food - 10
    }

    if (money > 0) {
        money = money - 10
    }

    if (beer > 0) {
        beer = beer - 10
    }

    refreshUI();
}







/*

function leprechaunHunger(food) {
    let hunger = 0
    if (food >= 70) {
        hunger = 3;
    } else if (food >= 40) {
        hunger = 2;
    } else {
        hunger = 1;
    }

    return hunger;

}


function leprechaunDrunkness(beer) {
    let drunk = 0
    if (beer >= 70) {
        drunk = 3;
    } else if (food >= 40) {
        drunk = 2;
    } else {
        drunk = 1;
    }

    return drunk;

}

function leprechaunWealth(money) {
    let wealth = 0
    if (money >= 70) {
        wealth = 3;
    } else if (money >= 40) {
        wealth = 2;
    } else {
        wealth = 1;
    }

    return wealth;

}

function leprechaunStatus(wealth, drunk, hunger) {
    let status = "Leprechaun is happy!"
    if (drunk <= 2 && wealth == 3 && hunger == 3) {
        status = "Leprechaun is godly!"
    } else if (drunk == 2 && wealth == 2 && hunger == 2) {
        status = "Leprechaun is happy!"
    } else if (drunk <= 2 && wealth <= 2 && hunger <= 2) {
        status = "Leprechaun is upset!"
    } else if (drunk >= 3 && wealth <= 1 && hunger <= 1) {
        status = "Leprechaun is drunk!"
    } else {
        status = "Leprechaun is happy!"
    }

}

*/