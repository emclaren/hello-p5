 
 //Example sketch  

var rad = 60; // Width of the shape
var xpos, ypos; // Starting position of shape

var xspeed = 10; // Speed of the shape
var yspeed = 10; // Speed of the shape

var xdirection = 1; // Left or Right
var ydirection = 1; // Top to Bottom



function setup() {
 var canvas = createCanvas(windowWidth, windowWidth/1.85);
 canvas.parent('video-overlay');
  xpos = width / 3;
  ypos = height / 2;
     fill(255,0,100);
}



function draw() {
 frameRate(60);

  clear();

console.log(video.currentTime);

if(video.currentTime>1){
  // Draw the shape
     ellipseMode(RADIUS);
 
    // Update the position of the shape
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;

  // Test to see if the shape exceeds the boundaries of the screen
  // If it does, reverse its direction by multiplying by -1
  if (xpos > width - rad || xpos < rad) {
    xdirection *= -1;
  }
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1;
  }
 ellipse(xpos, ypos, rad, rad);
}
if(video.currentTime>1.5){
  
  fill(random(255),random(255), random(255));
  }
if(video.currentTime>3.2){
// frameRate(0)
}


}


function windowResized() {
  resizeCanvas(windowWidth, windowWidth/1.85);
}
