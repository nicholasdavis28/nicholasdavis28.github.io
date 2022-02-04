let myCanvas = document.getElementById("my-canvas");
let ctx = myCanvas.getContext("2d");


let xPosition = 0;
let yPosition = 0;

/*
function moveHorizontal() {
    ctx.clearRect(0, 0, 500, 500);
    ctx.fillRect(xPosition, 0, 20, 20);
    xPosition += 1;
    if (xPosition >= 500) {
        xPosition = 0
    }
}


setInterval(moveVertical, 10);

function moveVertical() {
    ctx.clearRect(0, 0, 500, 500);
    ctx.fillRect(0, yPosition, 20, 20);
    yPosition += 1;
    if (yPosition >= 500) {
        yPosition = 0
    }
}

*/

setInterval(ballBounce, 1);
let speed = 1;

function ballBounce() {
    ctx.clearRect(0, 0, 500, 500);
    ctx.fillRect(xPosition, 0, 20, 20);
    xPosition += speed;
    if (xPosition == 480) {
        speed = -1
    } else if (xPosition == 0) {
        speed = 1
    }
}