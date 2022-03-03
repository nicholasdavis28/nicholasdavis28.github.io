// canvas item
let myCanvas = document.getElementById("my-canvas");
let ctx = myCanvas.getContext("2d");
let soccer = document.getElementById("soccer");

// get paragraph items
let keydownOutput = document.getElementById("keydown-output")
let keyupOutput = document.getElementById("keyup-output")

//player position and movement
let playerX = 250;
let playerY = 250;
let playerXDir = 0;
let playerYDir = 0;
let playerSpeed = 5.5;
const PADDLE_WIDTH = 20;
const PADDLE_HEIGHT = 100;

//defender 1 position and movement
let defender1X = 1000;
let defender1Y = 300;
let defender1XDir = 0;
let defender1YDir = 1;
let defender1Speed = 5.5;
const DEFENDER1_WIDTH = 20;
const DEFENDER1_HEIGHT = 100;

//defender 2 position and movement
let defender2X = 1200;
let defender2Y = 300;
let defender2XDir = 0;
let defender2YDir = 1;
let defender2Speed = 3.5;
const DEFENDER2_WIDTH = 20;
const DEFENDER2_HEIGHT = 100;

//defender 3 position and movement
let defender3X = 1400;
let defender3Y = 300;
let defender3XDir = 0;
let defender3YDir = 1;
let defender3Speed = 8;
const DEFENDER3_WIDTH = 20;
const DEFENDER3_HEIGHT = 100;

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
let ballX = 100;
let ballY = 100;
let ballXDir = 5;
let ballYDir = 5;
let BALL_RADIUS = 20;

// meter values
let playergoal = 0

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
/*
function drawDefender3() {
    ctx.fillRect(defender3X, defender3Y, DEFENDER3_WIDTH, DEFENDER3_HEIGHT)
}
*/

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

    defender1Y += (defender1Speed * defender1YDir);

    if (defender1Y > 800 - DEFENDER1_HEIGHT || (defender1Y < 0 + DEFENDER1_WIDTH)) {
        defender1YDir = -defender1YDir;
    }


}

function moveDefender2() {

    defender2Y += (defender2Speed * defender2YDir);

    if (defender2Y > 800 - DEFENDER2_HEIGHT || (defender2Y < 0 + DEFENDER2_WIDTH)) {
        defender2YDir = -defender2YDir;
    }

}

function moveDefender3() {

    defender3Y += (defender3Speed * defender3YDir);

    if (defender3Y > 800 - DEFENDER3_HEIGHT || (defender2Y < 0 + DEFENDER3_WIDTH)) {
        defender3YDir = -defender3YDir;
    }
}


function drawBall() {
    ctx.beginPath()
    ctx.arc(ballX, ballY, BALL_RADIUS, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
}

function drawImage() {
    ctx.drawImage(soccer, ballX, ballY, IMG_WIDTH, IMG_HEIGHT);
}

function moveBall() {
    ballY += ballYDir;
    ballX += ballXDir;
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

    /*if (ballY + BALL_RADIUS >= defender3Y &&
        ballY - BALL_RADIUS <= defender3Y + DEFENDER3_HEIGHT &&
        ballX + BALL_RADIUS >= defender3X &&
        ballX - BALL_RADIUS <= defender3X + DEFENDER3_WIDTH) {
        ballXDir = ballXDir * -1.005;
    }*/
}

function checkGoal() {
    if (ballY + BALL_RADIUS >= oppgoalY &&
        ballY - BALL_RADIUS <= oppgoalY + OPPGOAL_HEIGHT &&
        ballX + BALL_RADIUS >= oppgoalX &&
        ballX - BALL_RADIUS <= oppgoalX + OPPGOAL_WIDTH) {

        playergoal += 1;
        ballY = 400;
        ballX = 800;
    }

    if (ballY + BALL_RADIUS >= playergoalY &&
        ballY - BALL_RADIUS <= playergoalY + PLAYERGOAL_HEIGHT &&
        ballX + BALL_RADIUS >= playergoalX &&
        ballX - BALL_RADIUS <= playergoalX + PLAYERGOAL_WIDTH) {

        playergoal -= 1;
        ballY = 400;
        ballX = 800;
    }

}

function refreshUI() {
    ctx.clearRect(0, 0, 1500, 800);
    movePlayer();
    moveDefender1();
    moveDefender2();
    /*moveDefender3();*/
    drawPlayer();
    drawDefender1();
    drawDefender2();
    drawOppgoal();
    drawPlayergoal();
    /*drawDefender3();*/
    // animate ball
    checkBallCollision();
    let playergoalMeter = document.getElementById("playergoal-meter");
    playergoalMeter.value = playergoal;
    let playergoalParagraph = document.getElementById("playergoal-paragraph");
    playergoalParagraph.innerHTML = playergoal;
    checkGoal();
    moveBall();
    // drawBall();
    drawImage();
}

// when key is pressed
function keyPressed(event) {
    // get the actual key pressed
    let key = event.keyCode;
    keydownOutput.innerHTML = "Key down code: " + key;

    // move player
    if (key === 74) {
        playerXDir = -1;
    } else if (key === 76) {
        playerXDir = 1;
    } else if (key == 73) {
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