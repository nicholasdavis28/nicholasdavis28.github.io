let continueGame = "y";

while (continueGame === "y") {

    let welcomeMsg = "Welcome to 24/7 vending machines! You must choose between a drink or a snack";
    alert(welcomeMsg);

    // ask what course of action 
    let playerChoice = prompt("Will you buy a drink (1) or a snack (2)  ?");

    if (playerChoice === "2") {
        let playerSnack = Number(prompt("How many snacks did you buy?"));
        if (playerSnack < 2) {
            alert("I hope your snack tastes great!");
        } else if (playerSnack >= 3) {
            alert("You need to learn self restraint, you died a horrible death!");
        } else {
            alert("You got food poisoning and died a horrible death!");
        }


    } else if (playerChoice === "1") {
        alert("You received a nice refreshing drink");
        let drink = Math.floor(Math.random() * 10);
        if (drink < 2) {
            alert("You have recieved non branded Coca-Cola and drinking it has caused you to die a horrible death");
        } else if (2 < drink < 4) {
            alert("You have recieved Liquid Nitrogen and drinking it has caused you to be hospitalized");
        } else if (4 < drink < 6) {
            alert("You have recieved the water of the gods and drinking it has caused you to become immortal");
        } else if (6 < drink < 8) {
            alert("You have recieved Gatorade and drinking it has caused you to win the Superbowl");
        } else if (8 < drink < 10) {
            alert("You have recieved Sprite Cranberry it has caused LeBron to chase you down and kill you");
        }
    } else {
        alert("the vending machine blew up and you died a horrible death!");
    }

    continueGame = prompt("Would you like to play again (y/n)?");
}