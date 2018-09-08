

var lerpColor= function(s){
  s.grow=1
  s.x=0
  s.y=0

  s.setup = function(){
    s.pixelDensity(1);
    s.windowWidth = window.innerWidth ;
    s.windowHeight = s.windowWidth * .562
    s.canvas= s.createCanvas(s.windowWidth, s.windowHeight);
    s.canvas.parent('video-overlay');
    s.noStroke();
  }





  s.draw = function(){
   s.clear();
   s.move =s.map(s.mouseX, 0, s.windowWdith, 0, 255)
   s.from = s.color(255, 0, 0, s.x * 255);
   s.to = s.color(0, 0, 255, s.y * 255);
   s.c1 = s.lerpColor(s.from, s.to, .33);
   s.c2 = s.lerpColor(s.from, s.to, .66);
   for (s.i = 0; s.i < 15; s.i++) {
    s.fill(s.from);
      s.grow =s.map(s.mouseX, 0, s.windowWidth, 0, s.windowWidth/1.2)
      // s.translate(0, s.mouseY)
      s.quad(s.random(-s.width/20-s.grow, s.width/4.5), s.random(s.height),
       s.random(-s.width/20-s.grow, s.width/4.5), s.random(s.height),
       s.random(-s.width/20-s.grow, s.width/4.5),s.random(s.height),
       s.random(-s.width/20-s.grow, s.width/4.5), s.random(s.height));
      s.fill(s.c1);
      s.quad(s.random(s.width/6-s.grow, s.width/2+s.grow), s.random(s.height),
       s.random(s.width/6-s.grow, s.width/2+s.grow), s.random(s.height),
       s.random(s.width/6-s.grow, s.width/2+s.grow), s.random(s.height), 
       s.random(s.width/6-s.grow, s.width/2+s.grow), s.random(s.height));
      s.fill(s.c2);
      s.quad(s.random(s.windowWidth-s.width/6+s.grow, s.windowWidth-s.width/2-s.grow), s.random(s.height), 
       s.random(s.windowWidth-s.width/6+s.grow, s.windowWidth-s.width/2-s.grow), s.random(s.height),
       s.random(s.windowWidth-s.width/6+s.grow, s.windowWidth-s.width/2-s.grow), s.random(s.height), 
       s.random(s.windowWidth-s.width/6+s.grow, s.windowWidth-s.width/2-s.grow), s.random(s.height));
      s.fill(s.to);
      s.quad(s.random( s.windowWidth-s.width/4.5, s.windowWidth+s.width/20+s.grow), s.random(s.height), 
       s.random(s.windowWidth-s.width/4.5,s.windowWidth+s.width/20+s.grow), s.random(s.height),
       s.random(s.windowWidth-s.width/4.5, s.windowWidth+s.width/20+s.grow), s.random(s.height), 
       s.random(s.windowWidth-s.width/45, s.windowWidth+s.width/20+s.grow), s.random(s.height));
    }
    s.frameRate(5);
    if(window.videoCurrentTimeGlobal<106){
      if(s.x<.2){
       s.x += .02;
       s.y+= .02;
     }
   } 
   if(window.videoCurrentTimeGlobal>107.25){
     s.x -= .02;
     s.y-= .02;
     s.from = s.color(0, 0, 0, s.x * 255);
   }
   s.cutout();

 }

 s.cutout=function(){
  // var x;

  var c=document.getElementById("defaultCanvas0");
  var ctx=c.getContext("2d");


  ctx.clearRect((s.width/2)- ((s.windowWidth/3.2)/2),0,  s.windowWidth/3.2 ,s.windowHeight);

}





}

module.exports= lerpColor;


