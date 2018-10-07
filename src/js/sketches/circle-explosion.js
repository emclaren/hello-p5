/*********************
// Circle Explosion
// Description: Draws random exploding circles on the screen 
// Credit: waiting for release
*********************/

const circleExplosion = (p5) => {
	let circle = [];
	let circleCount = 0;
	let t = 0;
	let r;
	let g;
	let b;
	let circleColor = 0;
	let fadeOut=0;
	let test;
	let test2 = 0;
	
	p5.setup  = () => {
		p5.pixelDensity(1);
		let windowWidth = window.innerWidth;
		let windowHeight = windowWidth  * 0.562;
		p5.canvas = p5.createCanvas(windowWidth, windowHeight);
		p5.canvas.parent('video-overlay');
		p5.noFill();
	};
	
	p5.draw = () => {
		p5.clear();
		// Add a new circle once every 15 frames for a max of 7 circles
		if(t % 15 ==0 && circleCount < 7 ){
			p5.addCircle();
		}
		t++;
		// display the circles in the circle array
		for(var i = 0; i < circle.length; i++){
			circle[i].display();
		}
		
	};
	
	p5.Circle = function(xcoord, ycoord, diam, r, g, b){
		this.diameter = diam; //diameter begins as 0
		this.xPosition = xcoord; //random xcoordinate
		this.yPosition = ycoord; //random ycoordinate
		this.display = function() {
			
			// Make the circle outline shrink as it grows
			this.m = p5.map(this.diameter, 0, 80, 0, 4);
			
			
			if(window.videoCurrentTimeGlobal < 130.0){
				p5.strokeWeight(4-this.m);
			}
			if(window.videoCurrentTimeGlobal > 130.0){
				
				test2 ++;
				p5.strokeWeight(test2)
				
			}
			// Make circles near center less opaque than those far away
			this.colorgradient=p5.dist(this.xPosition, this.yPosition, p5.width/2, p5.height/2);
			this.opacity= p5.map(this.colorgradient, 0, p5.width/2, -100, 255);
			p5.stroke(r, g, b, this.opacity + fadeOut);
			// Fadeout circles when time reaches 130
			if(window.videoCurrentTimeGlobal < 125.0){
				p5.stroke(0, 255, 255, this.opacity + fadeOut);
			} else if(window.videoCurrentTimeGlobal < 130.0){
				p5.stroke(239, 34, 90, this.opacity + fadeOut);
			}else if(window.videoCurrentTimeGlobal < 132.75){
				p5.stroke(255, 255, 0, this.opacity + fadeOut);
			}else{
				p5.stroke(239, 34, 90, this.opacity + fadeOut);
			}
			// Draw the circle
			p5.ellipse(this.xPosition, this.yPosition, this.diameter, this.diameter);
			this.diameter += 0.5; //grow the circle each frame
			
			// reset the diam to 0, and move circle to a new coordinate once it gets too big
			if(this.diameter > 79){
				this.diameter = 0;
				this.xPosition = p5.random(p5.width);
				this.yPosition = p5.random(p5.height);
			}
			
			// Fadeout circles when time reaches 130
			if(window.videoCurrentTimeGlobal > 133.0){
				// fadeOut -= 20;
				
				// p5.strokeWeight(test2)
				// console.log(test2);
			}
			
		
			if(window.videoCurrentTimeGlobal > 136.0){
				p5SketchLogo = p5.createDiv('<img src="dist/assets/img/p5js.svg" alt="P5.js Logo" id="logo_image" class="p5-sketch-logo "></img>');
				p5SketchLogo.parent('video-overlay');


				// 
				// fadeOut -= 20;
				
				// p5.strokeWeight(test2)
				// console.log(test2);
			}
		};
	};
	
	
	p5.addCircle= function(){
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
		circle[circleCount] = new p5.Circle(p5.random(p5.width), p5.random(p5.height/2, p5.height), 0, r, g, b);
		circleCount++;
	};
	
	p5.mouseMoved = function() {
		if(p5.dist(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY)>50){
			new p5.Circle(p5.mouseX,p5.mouseY, 10, r, g, b);
			
		}
		
		
	};
	
};

module.exports= circleExplosion;


