
var sinLines= function(s){

s.counter = 0;
s.bgColor = 0;
s.i = 0;

  s.setup = function(){
    s.pixelDensity(1);
    s.windowWidth = window.innerWidth ;
    s.windowHeight = s.windowWidth * .5504
    s.canvas= s.createCanvas(s.windowWidth, s.windowHeight);
    s.canvas.parent('video-overlay');

  }


  s.draw = function(){
    s.rotate(s.PI/2 ) 
  s.clear();
  s.fill(255);

  s.stroke(255);

  for (s.t=0 ; s.t<s.windowWidth ; s.t+=10){
    s.colorMode(s.HSL,100);
    s.strokeWeight(2);
    s.stroke( s.map(s.t, 0, s.windowWidth, 50, 100) ,100,50);
    s.line(s.t, s.windowHeight, s.t, s.windowHeight/1.5-s.sin( s.i+s.t / 50 ) * 100);
  }

  s.i+=0.01;

}





    // console.log(s.windowWidth + "  height:  " +s.windowHeight)
    // s.clear();
    // // s.background(255,0,0);
    // s.strokeWeight(1)
    // s.fill(255,0,255);
    // s.stroke(0,255,0);
    
    //  s.triangle(s.first, s.first, s.first+s.move, s.second+s.move, s.second, s.second);
    // // s.triangle(18, 18, 18, 80, 80, 80);
    // s.fill(122,0,255);
    // s.stroke(0,0,122);
    // s.first= s.windowWidth/8;
    // s.second= s.windowHeight/2;
    // s.third= s.windowWidth/6;
    // s.fourth= s.windowHeight/6;
    //  s.fifth= s.windowWidth/2;
    // s.sixth= s.windowHeight/4;
    // s.triangle(s.first+s.move+20, s.first, s.first-10+s.move, s.second+s.move, s.second+10, s.second);
    // s.move=s.move+s.x;
    // console.log(s.move)
    // if(s.move>2 || s.move<-2  ){
    //  s.x = s.x * -1
    // }
  // }


  s.resize =  function() {
      s.windowWidth = window.innerWidth ;
    s.windowHeight = s.windowWidth * .5504
    s.resizeCanvas(s.windowWidth, s.windowWidth * .5504);
    console.log(s.windowWidth)

} 

window.onresize = s.resize;

}

module.exports= sinLines;











