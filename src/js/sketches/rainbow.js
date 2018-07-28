

var rainbow = function(s){

	
	s.setup = function(){
		s.pixelDensity(1);
		s.windowWidth = window.innerWidth ;
		s.windowHeight = s.windowWidth * .5504

			s.canvas= s.createCanvas(s.windowWidth, s.windowHeight);
		s.canvas.parent('video-overlay');
		s.background("white");

	}

	s.draw = function(){


		s.noStroke();
		s.fill('red');
		s.colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
		s.offset = 30;
		s.numCurves = 14;
		s.index = 0;
		for (s.i = 0; s.i < s.numCurves; s.i++) {
		// x ranges width of canvas
		s.index = s.index % s.colors.length;
		if (s.index == s.colors.length) {
			s.index = 0;
		}

		s.fill(s.colors[s.index])
		for (s.x = 0; s.x < s.width; s.x++) {
			// scaled so fewer and higher curves on screen
			s.y = s.sin(s.x / 100) * -100;
			s.ellipse(s.x, s.y + 100 + s.offset * s.i, s.offset);
		}
		s.index++;
	}
}


	s.resize =  function() {
	   	p.windowWidth = window.innerWidth ;
		p.windowHeight = p.windowWidth * .5504
    s.resizeCanvas(s.windowWidth, s.windowWidth * .5504);
    console.log(s.windowWidth)

} 

window.onresize = s.resize;

}

module.exports= rainbow;