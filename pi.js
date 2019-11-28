var canv;
var count;
var incount;
var pi;

function setup(){
	canv = 600;
	createCanvas(canv + 40, canv + 40);
	background(0);
	count = 0;
	incount = 0;
	pi = 0;
}


function draw(){
	count += 1;
	stroke(255);
	noFill();
	rectMode(CENTER);
	rect(width/2, height/2, canv, canv);
	ellipse(width/2, height/2, canv, canv);
	stroke(random(255), random(255), random(255));
	var x = random(20, canv+20);
	var y = random(20, canv+20);
	ellipse(x, y, 1, 1);
	if(dist(x, y, width/2, height/2) < canv/2){
		incount += 1;
	}

	pi = 4*incount/count;
	if(count%5 == 0) document.getElementById("pi").innerHTML = pi;
}