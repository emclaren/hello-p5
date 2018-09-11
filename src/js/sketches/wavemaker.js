/*********************
// Wavemaker
// Description: Draws randomly coloured hearts on screen 
// Credit: 
// Link: https://p5js.org/examples/interaction-wavemaker.html
*********************/


const wavemaker = (s) => {
  let growth = 30
  let colorgradient = 0;
  
  let t = 0;
 let colorbase
  
  s.setup  = () => {
    s.pixelDensity(1);
    let windowWidth = window.innerWidth ;
    let windowHeight = windowWidth  * 0.562;
    s.canvas = s.createCanvas(windowWidth, windowHeight);
    s.canvas.parent('video-overlay');
    s.noStroke();
    s.fill(238, 34, 90, 100);
    colorbase = -500;
  }


  s.draw  = () => {
    s.clear();
    // make a x and y grid of ellipses
    for(let x = 0; x <= s.width; x = x + growth) {
      let xAngle = s.map(s.mouseX, 0, s.width, -4 * s.PI, 4 * s.PI, true);
      let yAngle = s.map(s.mouseY, 0, s.height, -4 * s.PI, 4 * s.PI, true);

      for (let y = 0; y <= s.height; y = y + 30) {

      // starting point of each circle depends on mouse position
     
      s.fill(238,34,90, colorbase + colorgradient);

      // and also varies based on the particle's location
      let angle = xAngle * (x / s.width) + yAngle * (y / s.height);

      // each particle moves in a circle
      let myX = x + 20 * s.cos(2 * s.PI * t + angle);
      let myY = y + 20 * s.sin(2 * s.PI * t + angle);

      s.ellipse(myX, myY, 10, 10); // draw particle

      colorgradient=s.dist(x, y, s.width/2, s.height/2)
    }
  }
  t = t + 0.01; // update time
  if(window.videoCurrentTimeGlobal<37.5){
    if(colorbase<-s.width/4){
      colorbase+=20;
    }
  }
  else{
    console.log("growth"+growth)
   colorbase-=50;
   growth++
 }
}



}

module.exports = wavemaker;


