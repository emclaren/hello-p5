
var parabolicLines= function(s){


s.counter = 0;
s.bgColor = 0;
s.i = 0;

  s.setup = function(){
    s.pixelDensity(1);
    s.windowWidth = window.innerWidth/3 ;
    s.windowHeight = s.windowHeight 
    s.canvas= s.createCanvas(s.windowWidth, s.windowHeight);
    s.canvas.parent('video-overlay');
      // s.translate(s.windowWidth/2,s.windowHeight/2);
      s.frameRate(30);
 
  }


s.x1 = function(t){
  return s.sin(t / 10) * 300 + s.sin(t / 10) * 200;

}

s.y1 = function(t){
  return s.cos(t / 10) * 300 + s.cos(t / 15);
}

s.x2 = function(t){
   return s.sin(t / 15) * 100 + s.sin( t/ 10) * 100;
}

s.y2 = function(t){
  return s.cos(t / 30) * 200 + s.cos(t/100) * 3;

}



  s.draw = function(){
  // s.background(0);
  s.clear();
  s.fill(255);
  // translate(width/2,height/2);

  for(s.v=0;s.v<30;s.v++){
    s.push();
      s.blendMode(s.SCREEN);
      s.colorMode(s.HSL);
      s.strokeWeight(3);
      s.stroke( s.v*7+200 , 100, 50);
      s.line( s.x1(s.i+s.v) , s.y1(s.i+s.v) , s.x2(s.i+s.v) , s.y2(s.i+s.v) );
    s.pop();
  }
  s.i++;
  console.log("s.x1: " +s.x1());

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














