let food = 50;
let money = 50;
let beer = 50;



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
    let foodParagraph = document.getElementById("food-paragraph");
    foodParagraph.innerHTML = food;
    let moneyMeter = document.getElementById("money-meter");
    moneyMeter.value = money;
    let moneyParagraph = document.getElementById("money-paragraph");
    moneyParagraph.innerHTML = money;
    let beerMeter = document.getElementById("beer-meter");
    beerMeter.value = beer;
    let beerParagraph = document.getElementById("beer-paragraph");
    beerParagraph.innerHTML = beer;
    let petImg = document.getElementById("pet-image");
    let petParagraph = document.getElementById("pet-condition");
    if (beer >= 80) {
        petImg.src = "image/drunkleprechaun.jpg"
        petParagraph.innerHTML = "Leprechaun is drunk!";
    } else if (money >= 80 && food >= 80 && beer >= 50) {
        petImg.src = "image/richleprechaun.jpg"
        petParagraph.innerHTML = "Leprechaun has become a god!";
        alert("Congratulations you win!");
        window.location = 'https://nicholasdavis28.github.io/PET/index.html';
    } else if (money >= 50 && food >= 50 && beer >= 30) {
        petImg.src = "image/leprechaun.jpg"
        petParagraph.innerHTML = "Leprechaun is living life!";
    } else if (food >= 80 && beer <= 50 && money <= 50) {
        petImg.src = "image/fatleprechaun.jpg"
        petParagraph.innerHTML = "Leprechaun has put on some pounds!";
    } else if (food <= 50 && beer <= 50 && money <= 50) {
        petImg.src = "image/sadleprechaun.jpg"
        petParagraph.innerHTML = "Leprechaun is upset!";
    } else if (beer >= 50) {
        petImg.src = "image/tipsyleprechaun.jpg"
        petParagraph.innerHTML = "Leprechaun is tipsy downing pints in the pub with his friends!";
    } else {
        petImg.src = "image/leprechaun.jpg"
        petParagraph.innerHTML = "Leprechaun is chilling!";
    }
}

myInterval = setInterval(petTimer, 3000)


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



function win() {
    if (money >= 50 && food >= 50 && beer >= 80) {
        alert("Congratulations you win!");
        window.location.reload();
    }

}