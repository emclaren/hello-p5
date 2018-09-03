


var linkSketch= function(s){
	s.setup = function(){
		s.pixelDensity(1);
		s.windowWidth = window.innerWidth ;
		s.windowHeight = s.windowWidth * .5504;
		s.canvas= s.createCanvas(s.windowWidth, s.windowHeight);
		s.canvas.parent('video-overlay');
	}

	s.draw = function(){
		s.fill('hotpink')
		s.textSize(32);
		s.text('LinkPlaceholder', 100, s.windowHeight/2);
	}




	// s.resize =  function() {
	// 	s.windowWidth = window.innerWidth ;
	// 	s.windowHeight = s.windowWidth * .5504
	// 	s.resizeCanvas(s.windowWidth, s.windowWidth * .5504);
	// 	console.log(s.windowWidth)

	// } 

	// window.onresize = s.resize;

}

module.exports= linkSketch;



















