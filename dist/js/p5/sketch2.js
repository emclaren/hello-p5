var xpos;
var ypos ;

function setup() {
 var canvas = createCanvas(windowWidth, windowWidth/1.85); //make this mobile friendly
 canvas.parent('video-overlay');
 xpos = windowWidth/1.3;
 ypos =  windowHeight/3;


}

function draw() {
  clear();
  strokeWeight(5);
  ellipseMode(RADIUS);
  stroke(123,0,255);
  ellipse(xpos, ypos, 200, 200);
}

function mousePressed(){
  fill(random(255), random(255), random(255));
}

function windowResized() {
  resizeCanvas(windowWidth, windowWidth/1.85);
}

