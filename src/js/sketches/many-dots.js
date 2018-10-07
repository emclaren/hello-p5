/*********************
// Many Dots
// Description: Draws interactive dots on the screen
// Credit: 
*********************/

const manyDots = (p5) => {
  let dot = []; // array to hold the dots
  let dotInitNumber = 60; //intial set of dots 
  let leavingSpeed = 0.5; //speed dots leave the screen at end 
  let redValue; //variable for making interactive fill color
  let greenValue; //variable for making interactive fill color
  let lowerBound; //minimum possible dot diameter
  let upperBound; //maximum possible dot diameter
  
  p5.setup  = () => {
    p5.pixelDensity(1);
    let windowWidth = window.innerWidth ;
    let windowHeight = windowWidth  * 0.562;
    p5.canvas = p5.createCanvas(windowWidth, windowHeight);
    p5.canvas.parent('video-overlay');
    p5.strokeWeight(2);  
    p5.stroke(255,255,255);
    lowerBound = p5.width/100; //minimum possible dot diameter
    upperBound = p5.width/35; //maximum possible dot diameter
  };
  
  p5.draw  = () => {
    p5.clear();
    // control colors with the mouse
    redValue = p5.map(p5.mouseX, 0, p5.width, 0, 255); 
    greenValue= p5.map(p5.mouseY, 0, p5.width, 0, 255);
    p5.fill(redValue, greenValue, 133);
    // display the dots that have been created
    for(let i = 0; i < dot.length; i++){
      dot[i].display();
    }
    // start with an initial set of dots on the screen
    if(dot.length < dotInitNumber){
      p5.addDot();
    } //once the initial dots are on screen, make them wiggle
    else{
      for(let i = 0; i < dot.length; i++){
        dot[i].move();
      }
    }
    
    // Make the dots start leaving the screen in the middle of the sketch
    if(window.videoCurrentTimeGlobal > 68.5){
      for(let i = 0; i < dot.length; i++){
        // make the dot move to the side of the screen that it's closest to on the x-axis
        if(dot[i].x > p5.width / 2){
          dot[i].x = dot[i].x + leavingSpeed;
        }
        else{
          dot[i].x = dot[i].x - leavingSpeed;
        }
        // make the dot move to the side of the screen that it's closest to on the y-axis
        if(dot[i].y > p5.height/2){
          dot[i].y = dot[i].y + leavingSpeed;
        }
        else{
          dot[i].y = dot[i].y - leavingSpeed;
        }
      }
    }    
    // Reduce the size of the generated dots and speed up the animation at end of sketch
    if(window.videoCurrentTimeGlobal>72){
      if(lowerBound>0 && upperBound>0){
        lowerBound -= 0.05;
        upperBound -= 0.05;
      }else if(upperBound>0){
        upperBound -= 0.05;
      }
      leavingSpeed = 0.75;
    }
  };
  
  p5.Dot = function(xcoord){
    this.x = xcoord; //x coordinate of dot
    this.y = p5.random(p5.height); //y coordinate of dot
    this.diameter = p5.random(lowerBound, upperBound); //diameter of dot
    this.moveSpeed = 1; //speed that dot wiggles
    // display existing dots on the screen
    this.display = function() {
      p5.ellipse(this.x, this.y, this.diameter, this.diameter);
    };
    // make the dots wiggle
    this.move = function() {
      this.x += p5.random(-this.moveSpeed, this.moveSpeed);
      this.y += p5.random(-this.moveSpeed, this.moveSpeed);
    };
  };
  
  // create new pair of dots on opposite sides of the screen
  p5.addDot = function(){
    let xcoord = p5.random(p5.width / 3.2);
    dot[dot.length] = new p5.Dot(xcoord);
    dot[dot.length] = new p5.Dot(p5.width-xcoord);
  };
  
  // Create new dots when mouse moved on screen
  p5.mouseMoved = function() {
    p5.addDot();
  };
  // Create new dots when finger dragged on screen
  p5.mouseDragged = function() {
    p5.addDot();
  };
};

module.exports= manyDots;
