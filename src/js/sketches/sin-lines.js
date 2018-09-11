/*********************
// Sin Lines
// Description: vertical Lines in a sin wave formation. Extend to the top of the screen. Interactive thickness. 
// Credit: Based on sketch by waiting for release
// Link:
*********************/

const sinLines = (s) => {
  let strokeThickness;
  let lineSpacing;
  let t = 0;
  let lineHeight;
  let speed = 5;
  let thickness = 1;


  s.setup  = () => {
    s.pixelDensity(1);
    let windowWidth = window.innerWidth ;
    let windowHeight = windowWidth  * 0.562;
    s.canvas = s.createCanvas(windowWidth, windowHeight);
    s.canvas.parent('video-overlay');
    s.colorMode(s.HSL,100);
    lineHeight = s.width/8;
    lineSpacing = s.width/79;
  }

  s.draw  = () => {

    s.clear();
    s.fill(255);
    strokeThickness = s.map(s.mouseX, 0, s.width, 1, s.width/50)
    s.translate(0, lineHeight )
    for (let i = 0; i < s.width+5 ; i += lineSpacing){
      s.strokeWeight(strokeThickness);
      s.stroke( s.map(i, 0, s.width, 50, 100) ,100,50);
      s.line(i, s.width*2, i, s.height/3-s.sin( t+i/ 50) * 100);
    }

    if(window.videoCurrentTimeGlobal>80){
      lineHeight = lineHeight - speed;
      strokeThickness = strokeThickness+.1;
      speed+=.1
    }

    t += 0.01;
    s.cutout();
  }


  s.cutout =function(){
    let c=document.getElementById("defaultCanvas0");
    let ctx=c.getContext("2d");
    ctx.clearRect((s.width/2) - ((s.width/1.65)/2), 0, s.width/1.65 , s.height*4.1);
  }


}

module.exports= sinLines;











