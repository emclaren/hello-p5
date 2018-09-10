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
	let colorRandom = 0;
	let colorbase =- 200;

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
		for(var i = 0; i < circle.length; i++){
			circle[i].display();
		}
		if(t % 15 ==0 && circleCount < 10 ){
			s.addCircle();
		}
		t++;
	};

// FIX THIS
	s.Circle = function(xcoord, ycoord, diam, r, g, b){
		this.diameter = diam;
		n=n*-1;
		this.xPosition = xcoord;
		this.yPosition = ycoord;
		this.display = function() {
			this.m = s.map(this.diameter, 0, 80, 0, 4);
			s.strokeWeight(4-this.m);
			this.colorgradient=s.dist(this.xPosition, this.yPosition, s.width/2, s.height/2);
			s.stroke(r, g, b, colorbase + this.colorgradient);
			s.ellipse(this.xPosition, this.yPosition, this.diameter, this.diameter);
			this.diameter += 0.5;
			if(this.diameter > 79){
				this.diameter = 0;
				this.xPosition = s.random(s.width);
				this.yPosition = s.random(s.height);
			}
		};

		if(window.videoCurrentTimeGlobal > 130.0){
			colorbase -= 80;
		}
	};
	s.addCircle= function(){
		if(colorRandom % 3 == 0){
			r = 238;
			g = 34;
			b = 90;
		}else if(colorRandom % 2 == 0){
			r = 0;
			g = 255;
			b = 255;
		}else{
			r = 0;
			g = 0;
			b = 2;
		}

		circle[circleCount] = new s.Circle(s.random(s.width), s.random(s.height), 0, r, g, b);
		circleCount++;
		colorRandom++;
	};

};

module.exports= circleExplosion;


