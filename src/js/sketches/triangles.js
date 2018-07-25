

var triangles= function(s){

	s.setup = function(){
		s.windowWidth = window.innerWidth ;
		s.windowHeight = s.windowWidth * .5504
		s.canvas= s.createCanvas(s.windowWidth, s.windowHeight);
		s._pixelDensity = 1;
		s.canvas.parent('video-overlay');
		// s.background("white");
		x=0;

	}

	s.draw = function(){
s.strokeWeight(4)
s.fill(255,0,255);
s.stroke(0,255,0);
		s.triangle(18, 18, 18, 80, 80, 80);

		s.fill(122,0,255);
	s.stroke(0,0,122);
		s.triangle(180+x, 180+x, 180+x, s.windowWidth/2, s.windowWidth/2, s.windowWidth/2);
x=x+1;
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

module.exports= triangles;


