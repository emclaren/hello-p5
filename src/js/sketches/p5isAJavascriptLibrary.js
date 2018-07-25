// var p5isAJavascriptLibrary = function(p) {
// 	p.setup = function(){
// 		p.windowWidth = window.innerWidth ;
// 		p.windowHeight = p.windowWidth * .5504
// 		 p.canvas= p.createCanvas(p.windowWidth, p.windowHeight, 'webgl');
// 		p.canvas.parent('video-overlay');
// 		p.fill(0,133,255);
// 		p.x = 0;
// 		p.y = 0;
// 	}

// 	p.draw = function(){
// 		p.strokeWeight(5);
// 		p.stroke(255,255,255);
// 		p.ellipse(p.x, p.y, p.windowWidth*.05, p.windowWidth*.1);
// 		console.log("sketch3")
// 		p.x=+1;
// 		p.y=+1;
// 	}

//    p.windowResized= function windowResized() {
//     p.resizeCanvas(p.windowWidth, p.windowWidth * .5504);
// }
// }

// module.exports= p5isAJavascriptLibrary;


// var p5isAJavascriptLibrary = function(p) {
// p.flock;

// 	p.setup = function(){
// 			p.windowWidth = window.innerWidth ;
// // 		p.windowHeight = p.windowWidth * .5504
// // 		 p.canvas= p.createCanvas(p.windowWidth, p.windowHeight, 'webgl');
// // 		p.canvas.parent('video-overlay');
//   p.createCanvas(640,360);
//   p.flock = new p.Flock();
//   // Add an initial set of boids into the system
//   for (p.i = 0; p.i < 100; p.i++) {
//     p.b = new Boid(400,400);
//     p.flock.addBoid(b);
//   }
// }

// 	p.draw = function(){
//   p.flock.run();
// }


// p.Flock = function(){

//   // An array for all the boids
//   this.boids = []; // Initialize the array
// }

// Flock.prototype.run = function() {
//   for (var i = 0; i < this.boids.length; i++) {
//     this.boids[i].run(this.boids);  // Passing the entire list of boids to each boid individually
//   }
// }

// Flock.prototype.addBoid = function(b) {
//   this.boids.push(b);
// }

// // The Nature of Code
// // Daniel Shiffman
// // http://natureofcode.com

// // Boid class
// // Methods for Separation, Cohesion, Alignment added

// function Boid(x,y) {
//   this.acceleration = createVector(0,0);
//   this.velocity = createVector(random(-1,1),random(-1,1));
//   this.position = createVector(x,y);
//   this.r = 3.0;
//   this.maxspeed = 3;    // Maximum speed
//   this.maxforce = 0.05; // Maximum steering force
// }

// Boid.prototype.run = function(boids) {
//   this.flock(boids);
//   this.update();
//   this.borders();
//   this.render();
// }

// Boid.prototype.applyForce = function(force) {
//   // We could add mass here if we want A = F / M
//   this.acceleration.add(force);
// }

// // We accumulate a new acceleration each time based on three rules
// Boid.prototype.flock = function(boids) {
//   var sep = this.separate(boids);   // Separation
//   var ali = this.align(boids);      // Alignment
//   var coh = this.cohesion(boids);   // Cohesion
//   // Arbitrarily weight these forces
//   sep.mult(1.5);
//   ali.mult(1.0);
//   coh.mult(1.0);
//   // Add the force vectors to acceleration
//   this.applyForce(sep);
//   this.applyForce(ali);
//   this.applyForce(coh);
// }

// // Method to update location
// Boid.prototype.update = function() {
//   // Update velocity
//   this.velocity.add(this.acceleration);
//   // Limit speed
//   this.velocity.limit(this.maxspeed);
//   this.position.add(this.velocity);
//   // Reset accelertion to 0 each cycle
//   this.acceleration.mult(0);
// }

// // A method that calculates and applies a steering force towards a target
// // STEER = DESIRED MINUS VELOCITY
// Boid.prototype.seek = function(target) {
//   var desired = p5.Vector.sub(target,this.position);  // A vector pointing from the location to the target
//   // Normalize desired and scale to maximum speed
//   desired.normalize();
//   desired.mult(this.maxspeed);
//   // Steering = Desired minus Velocity
//   var steer = p5.Vector.sub(desired,this.velocity);
//   steer.limit(this.maxforce);  // Limit to maximum steering force
//   return steer;
// }

// Boid.prototype.render = function() {
//   // Draw a triangle rotated in the direction of velocity
//   var theta = this.velocity.heading() + radians(90);
//   fill(127);
//   stroke(200);
//   push();
//   translate(this.position.x,this.position.y);
//   rotate(theta);
//   beginShape();
//   vertex(0, -this.r*2);
//   vertex(-this.r, this.r*2);
//   vertex(this.r, this.r*2);
//   endShape(CLOSE);
//   pop();
// }

// // Wraparound
// Boid.prototype.borders = function() {
//   if (this.position.x < -this.r)  this.position.x = width +this.r;
//   if (this.position.y < -this.r)  this.position.y = height+this.r;
//   if (this.position.x > width +this.r) this.position.x = -this.r;
//   if (this.position.y > height+this.r) this.position.y = -this.r;
// }

// // Separation
// // Method checks for nearby boids and steers away
// Boid.prototype.separate = function(boids) {
//   var desiredseparation = 25.0;
//   var steer = createVector(0,0);
//   var count = 0;
//   // For every boid in the system, check if it's too close
//   for (var i = 0; i < boids.length; i++) {
//     var d = p5.Vector.dist(this.position,boids[i].position);
//     // If the distance is greater than 0 and less than an arbitrary amount (0 when you are yourself)
//     if ((d > 0) && (d < desiredseparation)) {
//       // Calculate vector pointing away from neighbor
//       var diff = p5.Vector.sub(this.position,boids[i].position);
//       diff.normalize();
//       diff.div(d);        // Weight by distance
//       steer.add(diff);
//       count++;            // Keep track of how many
//     }
//   }
//   // Average -- divide by how many
//   if (count > 0) {
//     steer.div(count);
//   }

//   // As long as the vector is greater than 0
//   if (steer.mag() > 0) {
//     // Implement Reynolds: Steering = Desired - Velocity
//     steer.normalize();
//     steer.mult(this.maxspeed);
//     steer.sub(this.velocity);
//     steer.limit(this.maxforce);
//   }
//   return steer;
// }

// // Alignment
// // For every nearby boid in the system, calculate the average velocity
// Boid.prototype.align = function(boids) {
//   var neighbordist = 50;
//   var sum = createVector(0,0);
//   var count = 0;
//   for (var i = 0; i < boids.length; i++) {
//     var d = p5.Vector.dist(this.position,boids[i].position);
//     if ((d > 0) && (d < neighbordist)) {
//       sum.add(boids[i].velocity);
//       count++;
//     }
//   }
//   if (count > 0) {
//     sum.div(count);
//     sum.normalize();
//     sum.mult(this.maxspeed);
//     var steer = p5.Vector.sub(sum,this.velocity);
//     steer.limit(this.maxforce);
//     return steer;
//   } else {
//     return createVector(0,0);
//   }
// }

// // Cohesion
// // For the average location (i.e. center) of all nearby boids, calculate steering vector towards that location
// Boid.prototype.cohesion = function(boids) {
//   var neighbordist = 50;
//   var sum = createVector(0,0);   // Start with empty vector to accumulate all locations
//   var count = 0;
//   for (var i = 0; i < boids.length; i++) {
//     var d = p5.Vector.dist(this.position,boids[i].position);
//     if ((d > 0) && (d < neighbordist)) {
//       sum.add(boids[i].position); // Add location
//       count++;
//     }
//   }
//   if (count > 0) {
//     sum.div(count);
//     return this.seek(sum);  // Steer towards the location
//   } else {
//     return createVector(0,0);
//   }
// }












// var p5isAJavascriptLibrary = function(p) {

// p.snowflakes = []; // array to hold snowflake objects

// 	p.setup = function(){
//   // createCanvas(400, 600);
//   p.windowWidth = window.innerWidth ;
// 		p.windowHeight = p.windowWidth * .5504
// 		 p.canvas= p.createCanvas(p.windowWidth, p.windowHeight, 'webgl');
// 		p.canvas.parent('video-overlay');

//   p.noStroke();
// }

// p.draw = function(){
// p.ellipse(100,100,100,100)
//   p.t = p.frameCount / 60; // update time
// console.log("hello")
//   // create a random number of snowflakes each frame
//   for (p.i = 0; p.i < p.random(5); p.i++) {
//     p.snowflakes.push(new p.snowflake()); // append snowflake object
//   }

//   // loop through snowflakes with a for..of loop
//   for (p.flake of p.snowflakes) {
//     p.flake.update(p.t); // update snowflake position
//     p.flake.display(); // draw snowflake

//   }
// }

// p.snowflake= function(){// snowflake class
//   // initialize coordinates
//   this.posX = 0;
//   this.posY = p.random(-50, 0);
//   this.initialangle = p.random(0, 2 * p.PI);
//   this.size = p.random(2, 5);

//   // radius of snowflake spiral
//   // chosen so the snowflakes are uniformly spread out in area
//   this.radius = p.sqrt(p.random(p.pow(p.width / 2, 2)));

//   this.update = function(time) {
//     // x position follows a circle
//     p.w = 0.6; // angular speed
//     p.angle = p.w * p.time + this.initialangle;
//     this.posX = p.width / 2 + this.radius * p.sin(p.angle);

//     // different size snowflakes fall at slightly different y speeds
//     this.posY += p.pow(this.size, 0.5);

//     // delete snowflake if past end of screen
//     if (this.posY > p.height) {
//       p.index = p.snowflakes.indexOf(this);
//       p.snowflakes.splice(p.index, 1);
//     }
//   };

//   this.display = function() {
//     p.ellipse(this.posX, this.posY, this.size);
//   };
// }
// }

// module.exports= p5isAJavascriptLibrary;





var p5isAJavascriptLibrary  = function(s){

	s.setup = function(){
		s.windowWidth = window.innerWidth ;
		s.windowHeight = s.windowWidth * .5504
		this._pixelDensity = 1;
		 // p.canvas= p.createCanvas(p.windowWidth, p.windowHeight, 'webgl');
// 		p.canvas.parent('video-overlay');
		s.canvas = s.createCanvas(s.windowWidth/3, s.windowHeight); //make this mobile friendly
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

module.exports= p5isAJavascriptLibrary;
