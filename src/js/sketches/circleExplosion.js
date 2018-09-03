
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

s.setup = function(){
	s.pixelDensity(1);
	s.windowWidth = window.innerWidth ;
	s.windowHeight = s.windowWidth * .5504
	s.canvas= s.createCanvas(s.windowWidth, s.windowHeight);
	s.canvas.parent('video-overlay');
	s.stroke(s.redRand,s.greenRand,s.blueRand);
	s.frameRate(40);
	s.noFill();
}


s.draw = function(){
	console.log("circle explosion sketch")
	s.clear();
	s.ellipse(50,50, 100,100)

	s.m = s.map(s.diameter, 0, 80, 0, 4);
	s.strokeWeight(4-s.m);
	// s.diameterExtra =s.map(s.mouseX, 0, s.windowWidth, 0, 20)
	// s.diameterExtra2= s.map(s.mouseX, 0, s.windowWidth, 30, 220)
	s.stroke(255,s.greenRand,123);
	for(var i = 0; i<s.circle.length; i++){
		s.circle[i].display();
	}
	if(s.circleCount<70){
		s.addCircle();
            // t.addDot2();
        }

    }


    s.Circle = function(xcoord){
    	console.log("this is the circle function")
        	// s.ellipse(s.windowWidth - s.xPosition, s.zPosition, s.diameter, s.diameter)
        	this.diameter++
        	s.n=s.n*-1;
        	console.log("this is the display function")
        	this.xPosition = s.random(255)*s.n;
        	
        	this.yPosition = s.random(s.windowHeight);
	// console.log(s.diameter)
	// if(this.diameter > s.mouseX){
	// 	this.diameter=0;
	// 	s.stroke(255,s.greenRand,123);
	// 	s.redRand = s.random(255);
	// 	s.greenRand = s.random(255);
	// }
	this.display = function() {
			// s.ellipse(150,s.random(450), 100,100)
		// s.ellipse(this.xPosition, this.yPosition, this.diameter+s.diameterExtra, this.diameter+s.diameterExtra)
		// s.ellipse(this.xPosition, this.yPosition, this.diameter, this.diameter)
		s.ellipse(this.xPosition, this.yPosition, s.diameter, 100)

	}


}
s.addCircle= function(){
	console.log("this is the add circle function")
	s.circle[s.circleCount] = new s.Circle(s.random(s.windowWidth/3.2));
	s.circleCount++;
}



}

module.exports= circleExplosion;


