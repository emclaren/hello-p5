
var parabolicLines= function(s){


s.img;
s.smallPoint; s.largePoint;

s.preload=function() {
  s.img = s.loadImage("../dist/assets/img/asterisk.png");

}

  s.setup = function(){
    s.pixelDensity(1);
    s.windowWidth = window.innerWidth;
    s.windowHeight = s.windowWidth * .5504
    s.canvas= s.createCanvas(s.windowWidth, s.windowHeight);
    s.canvas.parent('video-overlay');
        s.smallPoint = 5;
  s.largePoint = 40;

  s.noStroke();
  
  s.fill(0,255, 0)
  s.img.loadPixels();
 
  }





s.draw=function() {

  
  
  s.translate(s.windowHeight*.15, s.windowHeight*.15);
  s.scale(s.windowWidth/1280); 
  for (s.i =0; s.i<20; s.i++){
  s.pointillize = s.map(s.mouseX, 0, s.width, s.smallPoint, s.largePoint);
  s.x = s.floor(s.random(s.img.width));
  s.y = s.floor(s.random(s.img.height));
  s.pix = s.img.get(s.x, s.y);
  s.fill(s.pix, 128);
  s.ellipse(s.x, s.y, s.pointillize, s.pointillize);

}

}




  s.resize =  function() {
      s.windowWidth = window.innerWidth ;
    s.windowHeight = s.windowWidth * .5504
    s.resizeCanvas(s.windowWidth, s.windowWidth * .5504);
    console.log(s.windowWidth)

} 

window.onresize = s.resize;

}

module.exports= parabolicLines;

