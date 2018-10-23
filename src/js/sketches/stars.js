/*********************
// Stars
// Description: Draws ellipses in a circle on the screen with a cutout for the video
// Credit: waiting for release
// Link: 
*********************/

const stars = (p5) => {
  let stars = []; //array to hold the stars
  let starsNum = 600; //max number of stars
  let fadeIn= 0;  //variable to add stars a few at a time
  let cutoutSize; //size of the hole in the canvas
  let starColor; 
  let variableSpeed; //variable to make speed change using the mouse
  let mouseDistance; //variable to track mouse's distance from the center of the screen
  

  p5.setup  = () => {
    p5.pixelDensity(1);
    let windowWidth = document.documentElement.clientWidth;
    let windowHeight = windowWidth  * 0.562;
    p5.canvas = p5.createCanvas(windowWidth, windowHeight);
    p5.canvas.parent('video-overlay');
    p5.noStroke();
    // Add new stars to the stars array in the different colors
    for (let i = 0; i < starsNum; i++) {
      // make 1/3 of stars each color
      if (i < starsNum / 3) {
        starColor = "yellow";
      }  else if (i < starsNum * 2 / 3) {
        starColor = "magenta";
      } else {
        starColor = "cyan";
      }
      stars.push(new p5.Star(starColor));
    }
    // size of the canvas to remove to show the video underneath
    cutoutSize = p5.width/6.35;
  };
  
  p5.draw  = () => {
    p5.clear();
    p5.blendMode(p5.ADD);
    //  change the speed of the stars spinning based on where the mouse is positioned relative to the middle of the screen
    mouseDistance = p5.dist(p5.mouseX, p5.mouseY, p5.width/2, p5.height/2);
    variableSpeed = p5.map(mouseDistance, 0, p5.width/2, 1, 0);
    //  display the stars on the canvas
    for (let i = 0; i < fadeIn; i++) {
      stars[i].display();
    }
    // Fade the stars in 
    if(window.videoCurrentTimeGlobal < 46){
      if(fadeIn < starsNum){
        fadeIn +=10;
      }
    }
    // Fade the stars out
    if(window.videoCurrentTimeGlobal > 44){
      if(fadeIn > 20){
        fadeIn -= 20;
      }
    }
    // run function to cut out part of the canvas
    p5.cutout();
  };
  
  p5.Star = function(tmpColorName) {
    // create the stars in a circle
    this.R = p5.width/6;
    this.xcoord = this.R * p5.randomGaussian();
    this.ycoord = this.R * p5.randomGaussian();
    this.diam = p5.random(p5.width/250, p5.width/40) * 5;
    this.theta = 0;
    this.colorName = tmpColorName;
    switch (this.colorName) {
      case "cyan":
      this.color = p5.color("#00ffff15");
      this.speed = 0.75;
      break;
      case "magenta":
      this.color = p5.color("#ff00ff15");
      this.speed = 1.5;
      break;
      case "yellow":
      this.color = p5.color("#ffff0015");
      this.speed = 0.25;
      break;
      default:
    }
    this.display = function() {
      p5.fill(this.color);
      p5.push();
      p5.translate(p5.width / 2, p5.height / 2); //center the circles
      p5.rotate(p5.radians(this.theta));
      // Remove the circles from screen at the end
      if(window.videoCurrentTimeGlobal > 46.25){
        this.xcoord += 5;// move off screen
        this.diam--;//shrink the circles
        cutoutSize--; //reduce the size of the cutout
      }
      // Draw the circles 
      p5.ellipse(this.xcoord, this.ycoord, this.diam, this.diam);
      p5.pop();
      this.theta += this.speed + variableSpeed; //vary the speed at which the circles spin
    };
  };
  
  // Hide part of the canvas to prevent the sketch from overlapping on the video
  p5.cutout  = function() {
    var c = document.getElementById("defaultCanvas0");
    var ctx = c.getContext("2d");
    ctx.clearRect((p5.width / 2) - cutoutSize, 0, cutoutSize*2, p5.height);
  };  
};

module.exports= stars;




