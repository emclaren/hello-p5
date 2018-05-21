 
 //begin example sketch   

var rad = 60; // Width of the shape
var xpos, ypos; // Starting position of shape

var xspeed = 20; // Speed of the shape
var yspeed = 3; // Speed of the shape

var xdirection = 1; // Left or Right
var ydirection = 1; // Top to Bottom

function setup() {
 var canvas = createCanvas(windowWidth, windowWidth/1.85);
 canvas.parent('video-overlay');
 // noStroke();
  xpos = width / 3;
  ypos = height / 2;
}



video.addEventListener('play', function() 
{


  console.log("i played");


}, false);
function draw() {
   ellipseMode(RADIUS);
  // Set the starting position of the shape

  clear();
    fill(255,0,100);
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

  // Draw the shape
  ellipse(xpos, ypos, rad, rad);
}


function windowResized() {
  resizeCanvas(windowWidth, windowWidth/1.85);
}
