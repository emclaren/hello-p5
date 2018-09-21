/*********************
// Circle Explosion
// Description: Draws random exploding circles on the screen 
// Credit: waiting for release
*********************/

const circleExplosion = (s) => {
	let circle = [];
	let circleCount = 0;
	let n = 1;
	let t = 0;
	let r;
	let g;
	let b;
	let circleColor = 0;
	let fadeOut=0;

	s.setup  = () => {
		s.pixelDensity(1);
		let windowWidth = window.innerWidth;
		let windowHeight = windowWidth  * 0.562;
		s.canvas = s.createCanvas(windowWidth, windowHeight);
		s.canvas.parent('video-overlay');
		s.noFill();
	};


	s.draw = () => {
		s.clear();

		// Add a new circle once every 15 frames for a max of 7 circles
		if(t % 15 ==0 && circleCount < 7 ){
			s.addCircle();
		}
		t++;

		// display the circles in the circle array
		for(var i = 0; i < circle.length; i++){
			circle[i].display();
		}
	};

	s.Circle = function(xcoord, ycoord, diam, r, g, b){
		this.diameter = diam; //diameter begins as 0
		this.xPosition = xcoord; //random xcoordinate
		this.yPosition = ycoord; //random ycoordinate

		this.display = function() {
			// Make the circle outline shrink as it grows
			this.m = s.map(this.diameter, 0, 80, 0, 4);
			s.strokeWeight(4-this.m);

			// Make circles near center less opaque than those far away
			this.colorgradient=s.dist(this.xPosition, this.yPosition, s.width/2, s.height/2);
			this.opacity= s.map(this.colorgradient, 0, s.width/2, -100, 255);
			s.stroke(r, g, b, this.opacity + fadeOut);


			// Draw the circle
			s.ellipse(this.xPosition, this.yPosition, this.diameter, this.diameter);
			this.diameter += 0.5; //grow the circle each frame
			
			// reset the diam to 0, and move circle to a new coordinate once it gets too big
			if(this.diameter > 79){
				this.diameter = 0;
				this.xPosition = s.random(s.width);
				this.yPosition = s.random(s.height);
			}

			// Fadeout circles when time reaches 130
			if(window.videoCurrentTimeGlobal > 130.0){
				fadeOut -= 20;
			}
		};


};


s.addCircle= function(){
		// Alternate between colors with each circle
		if(circleColor % 3 == 0){
			r=0;
			g=0;
			b=2;
		}else if(circleColor % 2 == 0){
			r=0;
			g=255;
			b=255;
		}else{
			r=239;
			g=34;
			b=90;
		}
		circleColor++;

		// Create new Circle
		circle[circleCount] = new s.Circle(s.random(s.width), s.random(s.height/2, s.height), 0, r, g, b);
		circleCount++;
	};
};

module.exports= circleExplosion;


