

var forum= function(s){
	s.x1; //starting vertex
	s.x2; //ending vertex
		let notdisplayed=true;
	s.setup = function(){
		s.pixelDensity(1);
		s.windowWidth = window.innerWidth ;
		s.windowHeight = s.windowWidth * .5504;
		s.canvas= s.createCanvas(s.windowWidth, s.windowHeight);
		s.canvas.parent('video-overlay');
		s.div=s.createDiv('<a href="https://discourse.processing.org/"  target="_blank">Forum</a>');
		s.div.parent('video-overlay');
		s.div.addClass('myClass4 focused');
}

function touchMoved() {
	line(mouseX, mouseY, pmouseX, pmouseY);
	return false;
}

		s.x=.5;
		s.grow=0

		s.draw = function(){
			s.clear();
			s.strokeWeight(4);
			s.stroke(255,255,255);
			s.fill(237,34,93, 230)
			s.textSize(32);
			s.grow= s.grow+s.x
				if(window.videoCurrentTimeGlobal>112){
					if(notdisplayed){
						s.div.removeClass('focused');
		s.div2=s.createDiv('<a href="http://p5js.org/community/"  target="_blank">Community</a>');
		s.div2.parent('video-overlay');
		s.div2.addClass('myClass5 community focused');
		s.frameRate(0);
notdisplayed=false
	}
	}

			
			
	// 		if(s.grow > 2 || s.grow < -2){
	// 			s.x = s.x* -1;
	// 		}
	// var linkToFocus = document.getElementById('nav-community');
	// 		if(window.videoCurrentTimeGlobal>111.75){
	// 			s.x=s.x/2
	// 				linkToFocus.focus();

	// 		}



			// 	if(window.videoCurrentTimeGlobal>115.5){
			// linkToFocus.blur();
			// }
			
			
			// s.rect(s.windowWidth*.73, 90-s.grow, 190,80+s.grow*2)
		

}



}

module.exports= forum;
