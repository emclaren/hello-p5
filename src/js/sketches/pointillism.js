
/*********************
// P5 Logo Pointillism
// Description: Uses dots to create a p5 logo on screen, dots grow when mouse is moved
// Credit: Based on sketch by Daniel Shiffman
// Link: https://p5js.org/examples/image-pointillism.html
*********************/


const pointillism = (s) => {
  let img;
  let smallPoint; 
  let largePoint;
  let dotNumber=20;
  let transparency=0;

  s.preload  = () => {
    img = s.loadImage("../dist/assets/img/asterisk.png");
  }

  s.setup  = () => {
    s.pixelDensity(1);
    let windowWidth = window.innerWidth ;
    let windowHeight = windowWidth  * 0.562;
    s.canvas = s.createCanvas(windowWidth, windowHeight);
    s.canvas.parent('video-overlay');
    smallPoint = 5;
    largePoint = 40;
    s.noStroke();
    s.fill(0,255, 0)
    img.loadPixels();
  }

 s.draw  = () => {
    s.translate(s.width*.20, s.height*.25);
    s.scale(s.width/1280); 
    for (let i =0; i<dotNumber; i++){
      let pointillize = s.map(s.mouseX, 0, s.width, smallPoint, largePoint);
      let x = s.floor(s.random(img.width));
      let y = s.floor(s.random(img.height));
      let pix = img.get(x, y);
      s.fill(pix, 128);
      s.ellipse(x, y, pointillize, pointillize);
    }

    // Simulate fading the dots out by fading in a white rectangle at 31 seconds
 
    if(window.videoCurrentTimeGlobal>31){
      dotNumber--;
      transparency++;
      s.fill(255,255,255);
      s.rect(-20,-20,300,300);
    }
  }
}

module.exports= pointillism;

