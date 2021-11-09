var a;
var b;
var c;

var s = 500;
var m = 1000;
var speed = 1;

let cloudx=100;
let cloudy=100;
let blue= (75,218,218);

function setup() {
  createCanvas(500, 500);

}

function draw() {
  //background(60,128,230);
  background(219,81, mouseY);
  
  if ((s > 0) && (s < 500)) {
  
    a = c
  }
  
  if ((s > -555) && (s < 0)) {
  
    a = b
  }
  
  fill(255,204,0)
  ellipse(mouseX,mouseY,200,200);

  makeCloud(cloudx,cloudy);
  makeCloud(cloudx + 100, cloudy +100)
  fill(219,82,162)
  noStroke();
//MOUNTAINS
//further mountain
  fill(17, 20, 240);
  strokeWeight(0);
  triangle(360, 130, 760, 500, -40, 500);
  
  fill(213, 212, 255);
  strokeWeight(0);
	beginShape();
		vertex(360, 130);
		vertex(485, 246);
		vertex(390, 200);
		vertex(360, 250);
  	vertex(320, 217);
  	vertex(225, 255);
	endShape(CLOSE);
//closer one
  fill(75,218,218);
  strokeWeight(0);
  triangle(100, 180, 500, 500, -260, 500);
  
  fill(231, 241, 255);
  strokeWeight(0);
	beginShape();
		vertex(100, 180);
		vertex(225, 280);
		vertex(145, 250);
		vertex(120, 290);
  	vertex(70, 260);
  	vertex(-20, 286);
	endShape(CLOSE);
//HILLS
  fill(60, 145, 57);
	ellipse(50, 580, 1000, 400);
  
  fill(69, 168, 66);
  ellipse(440, 600, 1000, 400);

}

function makeCloud(cloudx,cloudy){
  fill(250);
  ellipse(cloudx,cloudy,70,50);
  ellipse(cloudx + 10, cloudy + 10, 70, 50);
  ellipse(cloudx-20, cloudy + 10, 70, 50)
}