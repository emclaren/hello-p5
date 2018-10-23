/*********************
// Hello P5 Title Sketch
// Description: Interactive Title Text for the Video
// Credit: waiting for release
*********************/


const helloP5Title = (p5) => {
  let upperBound;
  let lowerBound;
  let red = 233;
  let green = 34;
  let blue = 93;
  let fadeInSpeed = 34;
  let fadeOutSpeed = 50;
  let fadeHello = 0;
  let fadeP5 = 0;
  let mappedX = 0;
  let mappedY = 0;
  p5.setup  = () => {
    p5.pixelDensity(1);
    let windowWidth = document.documentElement.clientWidth;
    let windowHeight = windowWidth  * 0.562;
    p5.canvas = p5.createCanvas(windowWidth, windowHeight);
    p5.canvas.parent('video-overlay');
  };
  p5.draw  = () => {
    p5.clear(); //remove the old background
    p5.noStroke(); //remove the outline
    p5.translate(p5.width / 2, p5.height / 3); //Center the text on the canvas
    p5.textAlign(p5.CENTER, p5.CENTER); //Center align the text
    p5.textSize(p5.height / 5);
    p5.textStyle(p5.BOLD);
    p5.push();
    // Text Shadow - Light Color that moves
    p5.fill(red, green, blue, fadeHello / 4);
    p5.text('hello,', mappedX, mappedY); //position changes based on MouseX & MouseY Inputs
    p5.pop();
    p5.fill(red, green, blue, fadeP5/4);
    p5.text('p5*js', mappedX, p5.height/5 + mappedY); //position changes based on MouseX & MouseY Input    
    // Dark Text
    p5.push();
    p5.fill(red,green,blue, fadeHello);
    p5.text('hello,', 0,0);
    p5.pop();
    p5.fill(red,green,blue, fadeP5);
    p5.text('p5*js',0, p5.height/5);
    //Fade in "Hello" text immediately
    if(fadeHello < 255){
      fadeHello += fadeInSpeed;
    } 
    //Fade in P5js text after .25 seconds
    if(window.videoCurrentTimeGlobal > 8.25){
      if(fadeP5 < 255){
        fadeP5 += fadeInSpeed;
      }
    } 
    // Control the position of the shadow layer with the Mouse
    upperBound = p5.width / 200;
    lowerBound = upperBound * -1;
    mappedX = p5.map(Math.abs(p5.mouseX),0,p5.width,lowerBound, upperBound);
    mappedY = p5.map(Math.abs(p5.mouseY),0,p5.height,lowerBound, upperBound);
    // Fade out "Hello P5js" text 
    if(window.videoCurrentTimeGlobal>9.25){
      fadeHello -= fadeOutSpeed;
      fadeP5 -= fadeOutSpeed;
    }
  };
};

module.exports = helloP5Title;






















