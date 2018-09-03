

var webEditor= function(s){

	s.x1; //starting vertex
	s.x2; //ending vertex
	s.r = 16; //vertex radius
	s.move=0
	s.c1 = s.color(237,34,93);
  	s.c2 = s.color(237,134,193);
  	s.direction=1;

	s.setup = function(){
		s.pixelDensity(1);
		s.windowWidth = window.innerWidth ;
		s.windowHeight = s.windowWidth * .5504;
		s.canvas= s.createCanvas(s.windowWidth, s.windowHeight);
		s.canvas.parent('video-overlay');
		// s.div =  s.createDiv('<a href="https://alpha.editor.p5js.org/">WEBEDITOR</a>');
		s.div=s.createDiv('<a href="https://editor.p5js.org/"  target="_blank">P5 Web Editor</a>');
		s.div.parent('video-overlay');
		s.div.addClass('myClass');
		s.x=.5;
		s.grow=0
		s.x1 = s.createVector(s.random(0, s.width/2), s.random(0, s.height/2)); //random position to the upper left
		s.x2 = s.createVector(s.random(s.width/2, s.width), s.random(s.height/2, s.height)); 
	}


	s.draw = function(){
		s.clear();
		s.strokeWeight(4);
		s.stroke(255,255,255);
		s.fill(237,34,93, 230)
		s.textSize(32);
		s.grow= s.grow+s.x
		if(s.grow > 2 || s.grow < -2){
			s.x = s.x* -1;
		}
		var linkToFocus = document.getElementById('nav-download');
		if(window.videoCurrentTimeGlobal>98){
			s.x=s.x/2
			linkToFocus.focus();

			s.stroke(237,34,93)
			s.noFill();
			s.strokeWeight(10.0);
			s.strokeJoin(s.ROUND);
			s.beginShape();
			s.vertex((s.windowWidth/3)-20 , 100-s.move);
			s.vertex(s.windowWidth/3, 80-s.move);
			s.vertex((s.windowWidth/3)+20, 100-s.move);
			s.endShape();
			s.strokeWeight(2.0);
			// s.strokeWeight5
			// s.line(s.windowWidth/3, 80-s.move, s.windowWidth/3, 200+s.move)
		  s.setGradient((s.windowWidth/3)-4, 80-s.move,  7, 80+(s.move*2),  s.c1, s.c2);
			s.move=s.move + s.direction;
			if(s.move==10 || s.move==0 ){
			s.direction=s.direction*-1;
			console.log(s.move)
		}
		}
		
		if(window.videoCurrentTimeGlobal>102.5){
			linkToFocus.blur();
		}
		s.stroke(255,255,255);
		s.fill(237,34,93, 230)
		s.strokeWeight(4);
		s.rect(s.windowWidth*.73, 90-s.grow, 190,80+s.grow*2)
		// s.offset = s.r;

		// s.stroke(237,34,93)
		// s.triangle(s.windowWidth/3, 80, (s.windowWidth/3 )+10, 100,(s.windowWidth/3)-10, 100);
		// s.strokeWeight(9);
		// s.line(s.windowWidth/3, 100, s.windowWidth/3, 200)

		// s.noFill();
	 // s.arc(s.windowWidth/2.5, 100, s.windowWidth/6, s.windowHeight/5, s.HALF_PI, s.PI)




	}



s.setGradient=function(x, y, w, h, c1, c2) {
	  for (var i = y; i <= y+h; i++) {
      var inter = s.map(i, y, y+h, 0, 1);
      var c = s.lerpColor(c1, c2, inter);
      s.stroke(c);
      s.line(x, i, x+w, i);
  
    }
}

}

module.exports= webEditor;

