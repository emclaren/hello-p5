
/*********************
// Lerp Color
// Description:
// Credit: 
*********************/

const lerpColor= (s) => {
 let x = 0;
 let y = 0;
 let grow;
 let color1;
 let color2;
 let lerpColor1;
 let lerpColor2;


 s.setup  = () => {
  s.pixelDensity(1);
  let windowWidth = window.innerWidth ;
  let windowHeight = windowWidth  * 0.562;
  s.canvas = s.createCanvas(windowWidth, windowHeight);
  s.canvas.parent('video-overlay');
  s.noStroke();
};



s.draw = () => {
    s.frameRate(5); //Slow down the sketch 
    s.clear();
       s.test= s.map(s.mouseX, 0, s.width, 0, 20)
// s.test=s.map(s.mouseX, 0 , s.width, 0 , 30)
    color1 = s.color(255, 0, 0, x * 255);
    color2 = s.color(0, 0, 255, y * 255);
    lerpColor1 = s.lerpColor(color1, color2, .33);
    lerpColor2 = s.lerpColor(color1, color2, .66);
    for(let i = 0; i < s.test; i++) {
      s.fill(color1);
      s.grow = s.map(s.mouseY, 0, s.width, 0, s.width/1.2)
      s.quad(s.random(-s.width/20 - s.grow, s.width/4.5), s.random(s.height),
       s.random(-s.width/20 - s.grow, s.width/4.5), s.random(s.height),
       s.random(-s.width/20 - s.grow, s.width/4.5),s.random(s.height),
       s.random(-s.width/20 - s.grow, s.width/4.5), s.random(s.height));
      s.fill(lerpColor1);
      s.quad(s.random(s.width/6 - s.grow, s.width/2+s.grow), s.random(s.height),
       s.random(s.width/6 - s.grow, s.width/2+s.grow), s.random(s.height),
       s.random(s.width/6 - s.grow, s.width/2+s.grow), s.random(s.height), 
       s.random(s.width/6 - s.grow, s.width/2+s.grow), s.random(s.height));
      s.fill(lerpColor2);
      s.quad(s.random(s.width - s.width/6+s.grow, s.width - s.width/2 - s.grow), s.random(s.height), 
       s.random(s.width - s.width/6+s.grow, s.width-s.width/2 - s.grow), s.random(s.height),
       s.random(s.width - s.width/6+s.grow, s.width-s.width/2 - s.grow), s.random(s.height), 
       s.random(s.width - s.width/6+s.grow, s.width-s.width/2 - s.grow), s.random(s.height));
      s.fill(color2);
      s.quad(s.random( s.width - s.width/4.5, s.width+s.width/20 + s.grow), s.random(s.height), 
       s.random(s.width - s.width/4.5,s.width+s.width/20 + s.grow), s.random(s.height),
       s.random(s.width - s.width/4.5, s.width+s.width/20 + s.grow), s.random(s.height), 
       s.random(s.width - s.width/45, s.width+s.width/20 + s.grow), s.random(s.height));
    }

    if(window.videoCurrentTimeGlobal<106){
      if(x < .2){
       x += .02;
       y += .02;
     }
   } 
   if(window.videoCurrentTimeGlobal>107.25){
     x -= .02;
     y-= .02;
     color1 = s.color(0, 0, 0, x * 255);
   }
   s.cutout();

 };

 s.cutout=function(){
  var c=document.getElementById("defaultCanvas0");
  var ctx=c.getContext("2d");
  ctx.clearRect((s.width/2)- ((s.windowWidth/3.2)/2),0,  s.windowWidth/3.2 ,s.windowHeight);
};
};

module.exports = lerpColor;


