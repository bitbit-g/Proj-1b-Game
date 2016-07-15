//puck moves randomly
//player's controller will move up and down along line
//countdown for each turn, 4s
//up arrow 38
//down arrow 40
//shift 16
//space 32

// current date time for countdown timer - compare 2 date times for difference of maybe 10s
// compare y cood

// shooting function
// increase scoreP1
// increase turn


// ** timer for each turn
var dx = 5;
var dy = 5;
var x = 170;
var y = 40;
var a = 300;
var b = 200;
var score = 0;
var turn = 0;
var start = false;
var boardHt = 700;
var boardWidth = 400;
var d1 = new Date();
var curr_sec1 = d.getSeconds();
console.log(curr_sec1);
var d2 = new Date();
var curr_sec2 = d.getSeconds();

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");


//Draw Board
function drawBoard(){
ctx.fillStyle = "#000000";
ctx.fillRect(660,125,40,150);
ctx.moveTo(200,0);
ctx.lineTo(200,400);
ctx.stroke();
}

//draw puck

function drawController(){
	ctx.beginPath();
	ctx.arc(x,y,30,0,2*Math.PI);
	ctx.fillStyle = "blue";
	ctx.fill();

}


function drawPuck(){
	var lap = 0;

if (lap%2 === 0 && b < 370){
	b += 10;
	}
else if (lap%2 === 0 && b === 370){
	b -= 10;
	lap += 1;
	}
	else if (lap%2 === 1 && b > 30){
	b -= 10;
	}

	else if (lap%2 === 1 && b === 30){
	b -= 10;
	lap += 1;
	}

	ctx.beginPath();
	ctx.arc(a,b,30,0,2*Math.PI);
	ctx.fillStyle = "red";
	ctx.fill();

}


function clear() {
ctx.clearRect(0, 0, boardWidth, boardHt);
}

function draw(){
	clear();
	drawBoard();
	if (start) {
		drawPuck();
		drawController();
	}

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
start = true;
break;
// space button was pressed - shoot
case 32:
shoot = true;
break;

}
}

}



// function setTimedInterval(callback, delay, timeout){
//     var id=window.setInterval(callback, delay);
//     window.setTimeout(function(){
//         window.clearInterval(id);
//     }, timeout);
// }

init();
