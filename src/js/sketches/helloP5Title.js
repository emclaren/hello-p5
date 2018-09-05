/*********************
// Hello P5 Title Sketch
// Credit: waiting for release
*********************/

var helloP5Title = (s) => {
  let mappedX;
  let mappedY;
  let upperBound;
  let lowerBound;

  let red = 233;
  let green = 34;
  let blue = 93;
  let fadeInSpeed = 34;
  let fadeOutSpeed = 50;
  let fadeHello = 0;
  let fadeP5 = 0;


  s.setup  = () => {
    s.pixelDensity(1);
    let windowWidth = window.innerWidth ;
    let windowHeight = windowWidth  * 0.562;
    s.canvas = s.createCanvas(windowWidth, windowHeight);
    s.canvas.parent('video-overlay');
  };


  s.draw  = () => {
    s.clear(); //remove the old background
    s.noStroke(); //remove the outline
    s.translate(s.width / 2, s.height / 3); //Center the text on the canvas
    s.textAlign(s.CENTER, s.CENTER); //Center align the text
    s.textSize(s.height / 5);
    s.textStyle(s.BOLD);


    // Text Shadow - Light Color that moves
    s.fill(red, green, blue, fadeHello / 4);
    s.text('hello,', mappedX, mappedY); //position changes based on MouseX & MouseY Inputs

    s.fill(red, green, blue, fadeP5/4);
    s.text('p5*js', mappedX, s.height/5 + mappedY); //position changes based on MouseX & MouseY Inputs
    

    // Dark Text
    s.fill(red,green,blue, fadeHello);
    s.text('hello,', 0,0);

    s.fill(red,green,blue, fadeP5);
    s.text('p5*js',0, s.height/5);


    //Fade in "Hello" immediately
    if(fadeHello < 255){
     fadeHello += fadeInSpeed;
    }

    //Fade in P5js after .25 seconds
    if(window.videoCurrentTimeGlobal > 8.25){
      if(fadeP5 < 255){
        fadeP5 += fadeInSpeed;
      }
    }


    // Control the position of the shadow layer with the Mouse
    upperBound = s.width / 250;
    lowerBound = upperBound * -1;
    mappedX = s.map(Math.abs(s.mouseX),0,s.width,lowerBound, upperBound);
    mappedY = s.map(Math.abs(s.mouseY),0,s.height,lowerBound, upperBound);


    // Fade out "Hello P5js" text 
    if(window.videoCurrentTimeGlobal>9.25){
      fadeHello -= fadeOutSpeed;
      fadeP5 -= fadeOutSpeed;
    }

  };

};
module.exports = helloP5Title;






















