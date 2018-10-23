/*********************
// P5 Logo Pointillism
// Description: Uses dots to create a p5 logo on screen, dots grow when mouse is moved
// Credit: Based on sketch by Daniel Shiffman
// Link: https://p5jp5.org/examples/image-pointillism.html
*********************/

const pointillismLogo = (p5) => {
  let smallDot = 5; 
  let largeDot = 40;
  let dotNumber = 20;
  let opacity = 0;
  let img;
  let x;
  let y;
  let pix; 
  let dotSize;

  p5.preload  = () => {
    img = p5.loadImage("https://emclaren.github.io/hello-p5/dist/assets/img/sketch-pointilism-asterisk.png"); //Preload the log image 
  };

  p5.setup  = () => {
    p5.pixelDensity(1);
    let windowWidth = document.documentElement.clientWidth;
    let windowHeight = windowWidth * 0.562;
    p5.canvas = p5.createCanvas(windowWidth/2.3, windowHeight/1.5);
    p5.canvas.parent('video-overlay');
    img.loadPixels();
    p5.noStroke();
  };

  p5.draw  = () => {
    p5.push();
    p5.translate(p5.width * 0.20, p5.height * 0.25); // Move image to upper left corner
    p5.scale(p5.width/600);  // Scale to fit the size of the video

    //randomly add dots to create the image
    for(let i = 0; i < dotNumber; i++){
      dotSize = p5.map(p5.mouseX, 0, p5.width, smallDot, largeDot);
      x = p5.floor(p5.random(img.width));
      y = p5.floor(p5.random(img.height));
      pix = img.get(x, y);
      p5.fill(pix);
      p5.ellipse(x, y, dotSize, dotSize);
    }
    p5.pop();

     // Simulate fading the dots out by fading in a white rectangle at 31 seconds
     if(window.videoCurrentTimeGlobal>31){
      dotNumber--; //Reduce the number of dots so they dont keep overwriting the rectangle
      opacity++; //Slowly increase the opacity of the rectangle
      p5.fill(255, 255, 255, opacity);
      p5.rect(0, 0, p5.width, p5.height);
    }
  };
};

module.exports= pointillismLogo;

