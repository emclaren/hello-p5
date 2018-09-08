


var circleExplosion= function(s){



	
	s.circle = [];
	s.circleCount = 0;
// yPosition = 100;
s.diameter=0;
s.x=0;
s.xPosition = 100;
s.yPosition = s.random(s.windowHeight);
s.zPosition = s.random(s.windowHeight);
s.n =1;
s.redRand = s.random(255);
s.greenRand = s.random(255);
s.bluerand = s.random(255);
s.t=0;
s.colorRandom=0
s.colorgradient
s.colorbase=-200;

s.setup = function(){
	s.pixelDensity(1);
	s.windowWidth = window.innerWidth ;
	s.windowHeight = s.windowWidth * .5504
	s.canvas= s.createCanvas(s.windowWidth, s.windowHeight);
	s.canvas.parent('video-overlay');
	// s.stroke(s.redRand,s.greenRand,s.blueRand);
	s.frameRate(40);
	s.noFill();
}


s.draw = function(){

	s.clear();
	s.t++
	// s.ellipse(50,50, 100,100)

	// s.m = s.map(s.diameter, 0, 80, 0, 4);
	// s.strokeWeight(4-s.m);
	// s.diameterExtra =s.map(s.mouseX, 0, s.windowWidth, 0, 20)
	// s.diameterExtra2= s.map(s.mouseX, 0, s.windowWidth, 30, 220)
	// s.stroke(255,s.greenRand,123);
	for(var i = 0; i<s.circle.length; i++){
		s.circle[i].display();
	}
	if(s.t%15 ==0 && s.circleCount<10){
		s.addCircle();
            // t.addDot2();
        }

// s.addCircle();
}


s.Circle = function(xcoord, ycoord, diam,r,g,b){

    	  // s.colorgradient= s.map(s.colordistance, 0, s.width/2, 0, 255)

        	// s.ellipse(s.windowWidth - s.xPosition, s.zPosition, s.diameter, s.diameter)
        	this.diameter = diam
        	s.n=s.n*-1;

        	this.xPosition = xcoord;
        	
        	this.yPosition = ycoord;
	// console.log(s.diameter)
	// if(this.diameter > s.mouseX){
	// 	this.diameter=0;
	// 	s.stroke(255,s.greenRand,123);
	// 	s.redRand = s.random(255);
	// 	s.greenRand = s.random(255);
	// }
	
	// s.stroke(0,255,255, s.colorgradient);
	this.display = function() {
		this.m = s.map(this.diameter, 0, 80, 0, 4);
		s.strokeWeight(4-this.m);

		this.colorgradient=s.dist(this.xPosition,this.yPosition, s.width/2, s.height/2);
			// if(s.random(4)%2!==0){
			//  s.stroke(238,34,90, s.colorbase+this.colorgradient)
			// }else {
				s.stroke(r,g, b, s.colorbase+this.colorgradient)
			// }
			// s.stroke(r,g,b , s.colorbase+this.colorgradient)

			// }
			// s.ellipse(150,s.random(450), 100,100)
		// s.ellipse(this.xPosition, this.yPosition, this.diameter+s.diameterExtra, this.diameter+s.diameterExtra)
		// s.ellipse(this.xPosition, this.yPosition, this.diameter, this.diameter)
		s.ellipse(this.xPosition, this.yPosition, this.diameter, this.diameter)
		this.diameter+=.5;
		// console.log("this m"+ this.m)
		if(this.diameter >79){
			this.diameter=0;
			this.xPosition = s.random(s.windowWidth);
			this.yPosition = s.random(s.windowHeight);

		}
	}

	if(window.videoCurrentTimeGlobal>130.0){
		s.colorbase-=80
	}

}
s.addCircle= function(){
	
	console.log("color random"+s.colorRandom)
	if(s.colorRandom%3==0){
		s.r=238;
		s.g=34;
		s.b=90;
	}else if(s.colorRandom%2==0){
		s.r=0;
		s.g=255;
		s.b=255;
	}else{
		s.r=0;
		s.g=0;
		s.b=2;
	}

	console.log("rgb"+ s.r+"b"+s.b+"g"+s.g)
	s.circle[s.circleCount] = new s.Circle(s.random(s.windowWidth), s.random(s.windowHeight), 0, s.r,s.g,s.b);
	s.circleCount++;
	s.colorRandom++
}



}

module.exports= circleExplosion;


