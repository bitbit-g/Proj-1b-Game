//puck moves randomly
//player's controller will move up and down along line
//countdown for each turn, 4s
//up arrow 38
//down arrow 40
//shift 16
//space 32

// ** timer for each turn
var dx = 5;
var dy = 5;
var x = 170;
var y = 40;
var a = 300;
var b = 100;
var boardHt = 700;
var boardWidth = 400;
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

//Draw Board
ctx.fillStyle = "#000000";
ctx.fillRect(660,125,40,150);
ctx.moveTo(200,0);
ctx.lineTo(200,400);
ctx.stroke();

//draw puck

function drawController(){
	ctx.beginPath();
	ctx.arc(x,y,30,0,2*Math.PI);
	ctx.fillStyle = "blue";
	ctx.fill();
	// this.mass = 15;
	// this.velocityX = 0;
	// this.velocityY = 0;
	// this.maxSpeed = 10;
	// this.frictionX = 0.997;
	// this.frictionY = 0.997;
	// this.acceleration = 1;
}
drawController();

function drawPuck(){
	ctx.beginPath();
	ctx.arc(a,b,30,0,2*Math.PI);
	ctx.fillStyle = "red";
	ctx.fill();
	// this.mass = 15;
	// this.velocityX = 0;
	// this.velocityY = 0;
	// this.maxSpeed = 10;
	// this.frictionX = 0.997;
	// this.frictionY = 0.997;
	// this.acceleration = 1;
}
drawPuck();

function clear() {
ctx.clearRect(0, 0, boardWidth, boardHt);
}

function draw(){
	clear();
	drawPuck();
	drawController();
}

function init(){
	window.addEventListener('keydown',doKeyDown);
	return setInterval(draw, 1000);
}



function doKeyDown(evt){
switch (evt.keyCode) {
// Up arrow was pressed
case 38:
if (y - dy > 0){
y -= dy;
}
break;
//Down arrow was pressed
case 40:
if (y + dy < boardHt){
y += dy;
}
break;
//shift button was pressed - start game
case 16:
var decimal = Math.random();
b = decimal * boardWidth;
break;
}

}

var score = 0;
var turn = 0;


// function setTimedInterval(callback, delay, timeout){
//     var id=window.setInterval(callback, delay);
//     window.setTimeout(function(){
//         window.clearInterval(id);
//     }, timeout);
// }

init();
