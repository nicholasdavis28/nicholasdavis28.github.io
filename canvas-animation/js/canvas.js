// canvas item
let myCanvas = document.getElementById("my-canvas");
let ctx = myCanvas.getContext("2d");
let soccer = document.getElementById("soccer");

// get paragraph items
let keydownOutput = document.getElementById("keydown-output")
let keyupOutput = document.getElementById("keyup-output")

//player position and movement
let playerX = 350;
let playerY = 250;
let playerXDir = 0;
let playerYDir = 0;
let playerSpeed = 8.5;
const PADDLE_WIDTH = 20;
const PADDLE_HEIGHT = 100;

//defender 1 position and movement
let defender1X = 1000;
let defender1Y = 300;
let defender1XDir = 0;
let defender1YDir = 1;
let defender1Speed = 8.5;
const DEFENDER1_WIDTH = 20;
const DEFENDER1_HEIGHT = 100;

//defender 2 position and movement
let defender2X = 1200;
let defender2Y = 300;
let defender2XDir = 0;
let defender2YDir = 1;
let defender2Speed = 6.5;
const DEFENDER2_WIDTH = 20;
const DEFENDER2_HEIGHT = 100;


// opposition goal
let oppgoalX = 1468;
let oppgoalY = 230;
const OPPGOAL_WIDTH = 20;
const OPPGOAL_HEIGHT = 300;

// player goal
let playergoalX = 10;
let playergoalY = 230;
const PLAYERGOAL_WIDTH = 20;
const PLAYERGOAL_HEIGHT = 300;

// image settings
const IMG_WIDTH = 40;
const IMG_HEIGHT = 40;

// ball position and movement
let ballX = 500;
let ballY = 100;
let ballXDir = 8;
let ballYDir = 8;
let BALL_RADIUS = 20;

// meter values
let playergoal = 0
let oppgoal = 0
let min = 10
let max = 1000

//AI Values 
let distance = 200


function drawPlayer() {
    ctx.fillRect(playerX, playerY, PADDLE_WIDTH, PADDLE_HEIGHT)
}

function drawDefender1() {
    ctx.fillRect(defender1X, defender1Y, DEFENDER1_WIDTH, DEFENDER1_HEIGHT)
}

function drawDefender2() {
    ctx.fillRect(defender2X, defender2Y, DEFENDER2_WIDTH, DEFENDER2_HEIGHT)
}


function drawOppgoal() {
    ctx.fillRect(oppgoalX, oppgoalY, OPPGOAL_WIDTH, OPPGOAL_HEIGHT)
}

function drawPlayergoal() {
    ctx.fillRect(playergoalX, playergoalY, PLAYERGOAL_WIDTH, PLAYERGOAL_HEIGHT)
}

function movePlayer() {
    playerX += (playerSpeed * playerXDir);

    //edge check
    if (playerX < 0) {
        playerX = 0;
    } else if (playerX > 1500 - PADDLE_WIDTH) {
        playerX = 800 - PADDLE_WIDTH;
    }

    playerY += (playerSpeed * playerYDir);
}


function moveDefender1() {


    if (ballY >= defender1Y && defender1X - ballX <= distance && defender1X - ballX >= 10) {
        defender1YDir = 1
    } else if (ballY <= defender1Y && defender1X - ballX <= distance && defender1X - ballX >= 10) {
        defender1YDir = -1
    } else if (ballY >= defender1Y && defender1X - ballX <= 0 && defender1X - ballX >= -200) {
        defender1YDir = -1
    } else if (ballY <= defender1Y && defender1X - ballX <= 0 && defender1X - ballX >= -200) {
        defender1YDir = 1
    } else if (defender1X - ballX >= distance && defender1Y > 450) {
        defender1YDir = -1
    } else if (defender1X - ballX >= distance && defender1Y < 350) {
        defender1YDir = 1
    } else if (defender1X - ballX >= distance && defender1Y == 400) {
        defender1YDir = 0
    } else {
        defender1YDir = 0
    }



    defender1Y += (defender1Speed * defender1YDir);


}

function moveDefender2() {



    if (ballY >= defender2Y && defender2X - ballX <= distance && defender2X - ballX >= 10) {
        defender2YDir = 1
    } else if (ballY <= defender2Y && defender2X - ballX <= distance && defender2X - ballX >= 10) {
        defender2YDir = -1
    } else if (ballY >= defender2Y && defender2X - ballX <= 0 && defender2X - ballX >= -200) {
        defender2YDir = -1
    } else if (ballY <= defender2Y && defender2X - ballX <= 0 && defender2X - ballX >= -200) {
        defender2YDir = 1
    } else if (defender2X - ballX >= distance && defender2Y > 250) {
        defender2YDir = -1
    } else if (defender2X - ballX >= distance && defender2Y < 150) {
        defender2YDir = 1
    } else if (defender2X - ballX >= distance && defender2Y == 200) {
        defender2YDir = 0
    } else {
        defender2YDir = 0
    }

    defender2Y += (defender2Speed * defender2YDir);


}



function drawBall() {
    ctx.beginPath()
    ctx.arc(ballX, ballY, BALL_RADIUS, 0, 2 * Math.PI);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
}

/*function drawImage() {
    ctx.drawImage(soccer, ballX, ballY, IMG_WIDTH, IMG_HEIGHT);
}*/

function moveBall() {
    ballY += ballYDir;
    ballX += ballXDir;
}

function randomNum(min, max) {
    return Math.random() * (max - min) + min;
}


function checkBallCollision() {
    // check vertical wall
    if (ballY > 800 - BALL_RADIUS || (ballY < 0 + BALL_RADIUS)) {
        ballYDir = -ballYDir;
    }
    if (ballX > 1500 - BALL_RADIUS || (ballX < 0 + BALL_RADIUS)) {
        ballXDir = -ballXDir;
    }

    // check to see if I hit the paddle
    if (ballY + BALL_RADIUS >= playerY &&
        ballY - BALL_RADIUS <= playerY + PADDLE_HEIGHT &&
        ballX + BALL_RADIUS >= playerX &&
        ballX - BALL_RADIUS <= playerX + PADDLE_WIDTH) {
        ballXDir = ballXDir * -1.005;
    }

    if (ballY + BALL_RADIUS >= defender1Y &&
        ballY - BALL_RADIUS <= defender1Y + DEFENDER1_HEIGHT &&
        ballX + BALL_RADIUS >= defender1X &&
        ballX - BALL_RADIUS <= defender1X + DEFENDER1_WIDTH) {
        ballXDir = ballXDir * -1.005;
    }

    if (ballY + BALL_RADIUS >= defender2Y &&
        ballY - BALL_RADIUS <= defender2Y + DEFENDER2_HEIGHT &&
        ballX + BALL_RADIUS >= defender2X &&
        ballX - BALL_RADIUS <= defender2X + DEFENDER2_WIDTH) {
        ballXDir = ballXDir * -1.005;
    }


}

function checkGoal() {
    if (ballY + BALL_RADIUS >= oppgoalY &&
        ballY - BALL_RADIUS <= oppgoalY + OPPGOAL_HEIGHT &&
        ballX + BALL_RADIUS >= oppgoalX &&
        ballX - BALL_RADIUS <= oppgoalX + OPPGOAL_WIDTH) {

        playergoal += 1;
        ballY = 100;
        ballX = 1200;
        ballXDir = ballXDir * -1.25
        defender2Speed = defender2Speed * 1.25
        defender1Speed = defender1Speed * 1.25
        playerSpeed = playerSpeed * 1.25
        distance = distance + 100
    }

    if (ballY + BALL_RADIUS >= playergoalY &&
        ballY - BALL_RADIUS <= playergoalY + PLAYERGOAL_HEIGHT &&
        ballX + BALL_RADIUS >= playergoalX &&
        ballX - BALL_RADIUS <= playergoalX + PLAYERGOAL_WIDTH) {

        oppgoal += 1;
        ballY = 100;
        ballX = 300;
        ballXDir = ballXDir * -1.25
        defender2Speed = defender2Speed * 1.25
        defender1Speed = defender1Speed * 1.25
        playerSpeed = playerSpeed * 1.25
        distance = distance + 100
    }




}

function checkWin() {

    if (playergoal >= 3) {
        alert("Congratulations you win!");
        window.location = "https://nicholasdavis28.github.io/canvas-animation/index.html"
        window.location.reload();
    } else if (oppgoal >= 3) {
        alert("You lose! Get Better!!!")
        window.location = "https://nicholasdavis28.github.io/canvas-animation/index.html"
        window.location.reload();
    }

}

function refreshUI() {
    ctx.clearRect(0, 0, 1500, 800);
    movePlayer();
    moveDefender1();
    moveDefender2();
    drawPlayer();
    drawDefender1();
    drawDefender2();
    drawOppgoal();
    drawPlayergoal();
    // animate ball
    checkBallCollision();
    let playergoalMeter = document.getElementById("playergoal-meter");
    playergoalMeter.value = playergoal;
    let playergoalParagraph = document.getElementById("playergoal-paragraph");
    playergoalParagraph.innerHTML = playergoal;
    let oppgoalMeter = document.getElementById("oppgoal-meter");
    oppgoalMeter.value = oppgoal;
    let oppgoalParagraph = document.getElementById("oppgoal-paragraph");
    oppgoalParagraph.innerHTML = oppgoal;
    moveBall();
    // drawBall();
    drawBall();
    checkGoal();
    checkWin();
}

// when key is pressed
function keyPressed(event) {
    // get the actual key pressed
    let key = event.keyCode;
    keydownOutput.innerHTML = "Key down code: " + key;

    // move player
    if (key == 73) {
        playerYDir = -1
    } else if (key === 75) {
        playerYDir = 1;
    }
}

// when key is released
function keyReleased(event) {
    let key = event.keyCode;
    keyupOutput.innerHTML = "Key down code: " + key;

    // stop player
    if (key === 74) {
        playerXDir = 0;
    } else if (key === 76) {
        playerXDir = 0;
    } else if (key === 73) {
        playerYDir = 0;
    } else if (key === 75) {
        playerYDir = 0;
    }
}


setInterval(refreshUI, 30);