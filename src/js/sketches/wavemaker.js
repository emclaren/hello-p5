/*********************
// Wavemaker
// Description: Draws randomly coloured hearts on screen 
// Credit: 
// Link: https://p5js.org/examples/interaction-wavemaker.html
*********************/

const wavemaker = (p5) => {
  let colorgradient = 0;
  let time = 0;
  let fadeIn = -300;
  let dotDistance;
  let growth=0;
  let squareWidth;
  let strokeThickness;
  let halfWidth;

  p5.setup  = () => {
    p5.pixelDensity(1);
    let windowWidth = window.innerWidth ;
    let windowHeight = windowWidth  * 0.562;
    p5.canvas = p5.createCanvas(windowWidth, windowHeight);
    p5.canvas.parent('video-overlay');
    p5.noFill();
    p5.frameRate(30);
    dotDistance=p5.width/40;
    squareWidth=p5.width/20;
    halfWidth = p5.width/2;
  }; 
  
  p5.draw  = () => {
    p5.clear();
    // make a x and y grid of  rectangles
    for(let x = 0; x <= p5.width; x = x + dotDistance ) {
      // starting point of each circle depends on mouse position
      let xAngle = p5.map(p5.mouseX, 0, p5.width, -4 * p5.PI, 4 * p5.PI, true);
      let yAngle = p5.map(p5.mouseY, 0, p5.height, -4 * p5.PI, 4 * p5.PI, true);
      for (let y = 0; y <= p5.height; y = y + dotDistance ) {
        // have the opacity increase as the squares are further from the center
        colorgradient=p5.dist(x, y, halfWidth, p5.height/2.5) - (p5.width/2.5)+squareWidth;
        strokeThickness=p5.map(colorgradient, 0, halfWidth, 0, 15);
        // Increase the thickness of the stroke as the squares are further from the center
        p5.strokeWeight(strokeThickness);
        p5.stroke(238, 34, 90,  colorgradient + fadeIn);
        // position varies based on the square's location
        let angle = xAngle * (x / p5.width) + yAngle * (y / p5.height);
        // each square moves in a circular fashion each frame
        let xcoord = x + (p5.width/64) * p5.cos(2 * p5.PI * time + angle);
        let ycoord = y + (p5.width/64)  * p5.sin(2 * p5.PI * time + angle);
        p5.rect(xcoord, ycoord, squareWidth-growth, squareWidth-growth); // draw each circle
      }
    }
    time = time + 0.01; // update time for the circular movement
    // Fade the sketch's stroke color in at the start
    if(window.videoCurrentTimeGlobal<37){
      if(fadeIn<0){
        fadeIn +=20;
      }
    }
    // Shrink the squares and fade out at the end 
    else{
      if(growth <= squareWidth){
        growth += 2;
        fadeIn -= 10;
      }
    }
  };
};

module.exports = wavemaker;


