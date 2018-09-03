

var lerpColor= function(s){



	s.setup = function(){
		s.pixelDensity(1);
		s.windowWidth = window.innerWidth ;
		s.windowHeight = s.windowWidth * .562
		s.canvas= s.createCanvas(s.windowWidth, s.windowHeight);
		s.canvas.parent('video-overlay');
  // s.frameRate(20);
   	// s.background(255);
   	s.noStroke();
   }





   s.draw = function(){
 // s.background(255);
 s.clear();
 s.from = s.color(255, 0, 0, 0.2 * 255);
 s.to = s.color(0, 0, 255, 0.2 * 255);
 s.c1 = s.lerpColor(s.from, s.to, .33);
 s.c2 = s.lerpColor(s.from, s.to, .66);
 for (s.i = 0; s.i < 15; s.i++) {
 	s.fill(s.from);
 	s.quad(s.random(-40, 220), s.random(s.height),
 		s.random(-40, 220), s.random(s.height),
 		s.random(-40, 220), s.random(s.height),
 		s.random(-40, 220), s.random(s.height));
 	s.fill(s.c1);
 	s.quad(s.random(140, 380), s.random(s.height),
 		s.random(140, 380), s.random(s.height),
 		s.random(140, 380), s.random(s.height), 
 		s.random(140, 380), s.random(s.height));
 	s.fill(s.c2);
 	s.quad(s.random(s.windowWidth-140, s.windowWidth-380), s.random(s.height), 
 		s.random(s.windowWidth-140, s.windowWidth-380), s.random(s.height),
 		s.random(s.windowWidth-140, s.windowWidth-380), s.random(s.height), 
 		s.random(s.windowWidth-140, s.windowWidth-380), s.random(s.height));
 	s.fill(s.to);
 	s.quad(s.random( s.windowWidth-220, s.windowWidth+40), s.random(s.height), 
 		s.random(s.windowWidth-220,s.windowWidth+40), s.random(s.height),
 		s.random(s.windowWidth-220, s.windowWidth+40), s.random(s.height), 
 		s.random(s.windowWidth-220, s.windowWidth+40), s.random(s.height));
 }
 s.frameRate(5);
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


