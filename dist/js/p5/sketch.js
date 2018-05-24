 
 //Example sketch  

var rad = 60; // Width of the shape
var xpos, ypos; // Starting position of shape

var xspeed = 10; // Speed of the shape
var yspeed = 10; // Speed of the shape

var xdirection = 1; // Left or Right
var ydirection = 1; // Top to Bottom



function setup() {
 var canvas = createCanvas(windowWidth, windowWidth/1.85);
  // var canvas = createCanvas(200, 200);
 canvas.parent('video-overlay');
 xpos = width /2;
 ypos = height /2;
 fill(255,0,100);
}



function draw() {
frameRate(60);
 // clear();
 console.log(video.currentTime);

 if(video.currentTime>1){
  ellipseMode(RADIUS);
    xpos = xpos + xspeed * xdirection;
    ypos = ypos + yspeed * ydirection;
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
}


//Resize canvas when window resized. 

function windowResized() {
  resizeCanvas(windowWidth, windowWidth/1.85);
}
