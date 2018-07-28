

var triangles= function(s){

	s.setup = function(){
		s.pixelDensity(1);
		s.windowWidth = window.innerWidth ;
		s.windowHeight = s.windowWidth * .5504
		s.canvas= s.createCanvas(s.windowWidth, s.windowHeight);
		s.canvas.parent('video-overlay');
		s.x=1;
		s.move =0 ;
		s.frameRate(30);
	}


	s.draw = function(){
		console.log(s.windowWidth + "  height:  " +s.windowHeight)
		s.clear();
		// s.background(255,0,0);
		s.strokeWeight(1)
		s.fill(255,0,255);
		s.stroke(0,255,0);
		
			s.triangle(s.first, s.first, s.first+s.move, s.second+s.move, s.second, s.second);
		// s.triangle(18, 18, 18, 80, 80, 80);
		s.fill(122,0,255);
		s.stroke(0,0,122);
		s.first= s.windowWidth/8;
		s.second= s.windowHeight/2;
		s.third= s.windowWidth/6;
		s.fourth= s.windowHeight/6;
			s.fifth= s.windowWidth/2;
		s.sixth= s.windowHeight/4;
		s.triangle(s.first+s.move+20, s.first, s.first-10+s.move, s.second+s.move, s.second+10, s.second);
		s.move=s.move+s.x;
		console.log(s.move)
		if(s.move>2 || s.move<-2  ){
			s.x = s.x * -1
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

module.exports= triangles;


