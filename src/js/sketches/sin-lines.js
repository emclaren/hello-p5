/*********************
// Sin Lines
// Description: vertical Lines in a sin wave formation. Extend to the top of the screen. Interactive thickness. 
// Credit: Based on sketch by waiting for release
// Link:
*********************/

const sinLines = (p5) => {
  let strokeThickness; //thickness of the lines
  let lineSpacing; //variable to store the space between the lines
  let move = 0; //variable to move the sinwave as the sketch draws
  let yOffset = 0; 
  let cutoutSize;

  p5.setup  = () => {
    p5.pixelDensity(1);
    let windowWidth = document.documentElement.clientWidth;
    let windowHeight = windowWidth  * 0.562;
    p5.canvas = p5.createCanvas(windowWidth, windowHeight);
    p5.canvas.parent('video-overlay');
    p5.colorMode(p5.HSL,100);
    lineSpacing = p5.width/79; // distance between each line 
    cutoutSize = p5.width/3.3; // size of the canvas to remove to show the video underneath
  };
  
  p5.draw  = () => { 
    p5.clear();
    //make the weight of the stroke interactive 
    strokeThickness = p5.map(p5.mouseX, 0, p5.width, 1, p5.width/50); 
    p5.strokeWeight(strokeThickness);
    // draw the lines
    for (let i = 0; i < p5.width+5; i += lineSpacing){
      p5.stroke(p5.map(i, 0, p5.width, 50, 100), 100, 50);
      p5.line(i, p5.height, i, p5.height/1.5 - (p5.sin( move+ i / (p5.width/20)) * p5.width/10)-yOffset);
    }
    move += 0.01; // make the sinewave move when the sketch runs
    // increase the height of the lines at the end of the sketches
    if(window.videoCurrentTimeGlobal>80){    
      yOffset += 5;
      }
    //once the lines are as tall as the canvas, increase the size of the cutout 
    if(yOffset > p5.height){
      cutoutSize += 4;
    }
    p5.cutout(); // run function to cut out part of the canvas
  };
  // Hide part of the canvas to prevent the sketch from overlapping on the video
  p5.cutout  = function() {
    var c = document.getElementById("defaultCanvas0");
    var ctx = c.getContext("2d");
    ctx.clearRect((p5.width / 2) - cutoutSize, 0, cutoutSize*2, p5.height);
  };  
};

module.exports= sinLines;









