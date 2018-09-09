
/*********************
// Target Sketch
// Description: Randomly colored ellipses increasing in size
// Credit: Based on sketch by awaiting confirmation
// Link: Insert Link
*********************/

const targetSketch = (s) => {
  let speed = 0;

  s.setup  = () => {
    s.pixelDensity(1);
    let windowWidth = window.innerWidth ;
    let windowHeight = windowWidth  * 0.562;
    s.canvas = s.createCanvas(windowWidth, windowHeight);
    s.canvas.parent('video-overlay');
    s.frameRate(30);
  };

  s.draw = () => {
    s.clear();

    // style attributes
    s.noFill();
    s.strokeWeight(3);
    s.stroke(s.random(255), s.random(255), s.random(255));

    // Draw 3 circles 20 pixels apart
    for(let i = 0; i < 60; i+=20){
      s.ellipse(s.width/2, s.height/2, speed+i, speed+i);
    }

    // Increase the size of the circle over time
    speed += 20;    
  }; 
};


module.exports = targetSketch ;

