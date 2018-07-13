

var sketch4 = function(s){

	s.setup = function(){
		this._pixelDensity = 1;
		canvas = s.createCanvas(windowWidth, windowWidth/1.85); //make this mobile friendly
		canvas.parent('video-overlay');
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
	s.resizeCanvas(windowWidth, windowWidth/1.755, 'webgl');
	s.target.width= window.innerWidth * .92;
	s.target.height=window.innerWidth /2;
	//set up reformat parameters
	s.reformat.width = s.target.width;
	s.reformat.height = s.target.height;
	s.reformat.mode = "cover";

} 

window.onresize = s.resize;

}