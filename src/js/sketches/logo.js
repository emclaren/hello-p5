let videoCurrentTimeImport = require('../main.js');

var logo= function(s){
  s.mapped;
  // s.s=0.0;
  // s.a = 0.0;
  s.s=1.0;
  s.a = 0.0;
  s.r =242;
  s.g =242;
  s.b = 242;
  s.r2 =242;
  s.g2 =242;
  s.b2 = 242;
  s.translateAmount = 500;

  s.setup = function(){
    s.pixelDensity(1);
    s.windowWidth = window.innerWidth ;
    s.windowHeight = s.windowWidth  * .562;
    s.canvas= s.createCanvas(s.windowWidth, s.windowHeight);
    s.canvas.parent('video-overlay');

  }

  s.draw = function(){
    s.clear();
    s.noStroke();
  // s.background(240);
  s.translate(s.windowWidth/2, s.windowHeight/3);
  s.mappedX = s.map(Math.abs(s.mouseX),0,s.width,-s.windowWidth/250,s.windowWidth/250);
  s.mappedY = s.map(Math.abs(s.mouseY),0,s.height,-s.windowHeight/200,s.windowHeight/200);
  console.log(s.mappedY);





  if(s.x>0){
    s.x=s.x-.5;
  }


s.push();
s.blendMode(s.MULTIPLY);
s.textAlign(s.CENTER, s.CENTER);
s.textSize(s.height/5);
s.textStyle(s.BOLD);

  // s.fill(233,100,250);

  s.fill(s.r2,s.g2,s.b2);
  s.text('hello,', s.mappedX, s.mappedY);
  s.text('p5*js', s.mappedX,s.height/5+s.mappedY);
  
  s.fill(s.r,s.g,s.b);

  s.text('hello,', 0,0);
  s.text('p5*js',0, s.height/5);



// Fade out Hello P5,js Text
if(window.videoCurrentTimeGlobal<9.25){
  if(s.r>233){
    s.r=s.r-20;
    s.r2=s.r2-10;
  }
  if(s.g>100){
    s.g=s.g-20;
    s.g2=s.g2-10;
  }

  if(s.b>150){
    s.b=s.b-20;
    s.b2=s.b2-10;
  }

}



if(window.videoCurrentTimeGlobal>9.25){
  if(s.r<240){
    s.r=s.r+10;
  }
  if(s.g<240){
    s.g=s.g+10;
  }
  if(s.b<240){
    s.b=s.b+10;
  }
}

  // s.fill(233,100,250);
  // s.text('hello,', s.windowWidth/2+s.mapped-s.x, s.windowHeight/2.5);

  // s.fill(233,100,150);
  // s.text('hello,', s.windowWidth/2, s.windowHeight/2.5);


  // s.fill(233,100,250);
  // s.text('p5*js', s.windowWidth/2+s.mapped-s.x, s.windowHeight/1.5);


  // s.fill(233,100,150);
  // s.text('p5*js', s.windowWidth/2, s.windowHeight/1.5);

  s.pop();
}



}
module.exports= logo;






















