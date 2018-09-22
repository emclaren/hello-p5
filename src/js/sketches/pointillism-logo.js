/*********************
// P5 Logo Pointillism
// Description: Uses dots to create a p5 logo on screen, dots grow when mouse is moved
// Credit: Based on sketch by Daniel Shiffman
// Link: https://p5js.org/examples/image-pointillism.html
*********************/

const pointillismLogo = (s) => {
  let smallDot = 5; 
  let largeDot = 40;
  let dotNumber = 20;
  let opacity = 0;
  let img;
  let x;
  let y;
  let pix; 
  let dotSize;

  s.preload  = () => {
    img = s.loadImage("https://emclaren.github.io/hello-p5/dist/assets/img/sketch-pointilism-asterisk.png"); //Preload the log image 
  };

  s.setup  = () => {
    s.pixelDensity(1);
    let windowWidth = window.innerWidth ;
    let windowHeight = windowWidth * 0.562;
    s.canvas = s.createCanvas(windowWidth, windowHeight);
    s.canvas.parent('video-overlay');
    img.loadPixels();
    s.noStroke();
  };

  s.draw  = () => {
    s.translate(s.width * 0.20, s.height * 0.25); // Move image to upper left corner
    s.scale(s.width/1280);  // Scale to fit the size of the video

    //randomly add dots to create the image
    for(let i = 0; i < dotNumber; i++){
      dotSize = s.map(s.mouseX, 0, s.width, smallDot, largeDot);
      x = s.floor(s.random(img.width));
      y = s.floor(s.random(img.height));
      pix = img.get(x, y);
      s.fill(pix, 128);
      s.ellipse(x, y, dotSize, dotSize);
    }

     // Simulate fading the dots out by fading in a white rectangle at 31 seconds
     if(window.videoCurrentTimeGlobal>31){
      dotNumber--; //Reduce the number of dots so they dont keep overwriting the rectangle
      opacity++; //Slowly increase the opacity
      s.fill(255, 255, 255, opacity);
      s.rect(-20, -20, 300, 300);
    }
  };
};

module.exports= pointillismLogo;

