/*********************
// La Monster Club Sketch 
// Credit: waiting for release
*********************/

var logo= function(s){
  s.mapped;

  s.setup = function(){
    s.pixelDensity(1);
    s.windowWidth = window.innerWidth ;
    s.windowHeight = s.windowWidth * .5504;
    s.canvas= s.createCanvas(s.windowWidth, s.windowHeight);
    s.canvas.parent('video-overlay');

  }

  s.draw = function(){
    
  s.background(240);
 s.mapped = s.map(Math.abs(s.mouseX),0,s.width,-7,7);
 
 console.log(s.mouseX)
  if(s.mouseIsPressed){
      s.mapped+=5;
  }

  s.push();
  s.blendMode(s.MULTIPLY);
  s.textAlign(s.CENTER, s.CENTER);
  s.textSize(s.height/5);
  s.textStyle(s.BOLD);

  // s.text('p5*js', s.windowWidth/2+s.mapped, s.windowHeight/1.5);
  // cyan
  s.fill(0, 255, 255);
  s.text('hello', s.windowWidth/2+s.mapped, s.windowHeight/2.5);

  // magenta
  s.fill(0);
  s.text('hello', s.windowWidth/2, s.windowHeight/2.5);

  //yellow
  s.fill(237, 34, 93);
  s.text('hello', s.windowWidth/2-s.mapped, s.windowHeight/2.5 );

  // cyan
  s.fill(0, 255, 255);
  s.text('p5*js', s.windowWidth/2+s.mapped, s.windowHeight/1.5);

  // magenta
  s.fill(0);
  s.text('p5*js', s.windowWidth/2, s.windowHeight/1.5);

  //yellow
  s.fill(237, 34, 93);
  s.text('p5*js', s.windowWidth/2-s.mapped, s.windowHeight/1.5 );

  s.pop();
}




window.onresize = function() {
  s.windowWidth = window.innerWidth ;
  s.windowHeight = s.windowWidth * .5504
  s.resizeCanvas(s.windowWidth, s.windowWidth * .5504);
} 

}
module.exports= logo;






















