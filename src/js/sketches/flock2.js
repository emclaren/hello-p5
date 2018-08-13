
var flock;
var r;
function setup() {


 cnv = createCanvas(windowWidth, windowHeight);
 centerCanvas();
 flock = new Flock();
frameRate(40);
  // Add an initial set of boids into the system
  for (var i = 0; i < 9; i++) {
    var b = new Boid(5,1000);
    flock.addBoid(b);

  }




}

 // Triangles based on Daniel Shiffman's Flock example

function draw() {
  background(255);
  flock.run();


}


// function mousePressed() {
//   cnv.remove();


// }

// Add a new boid into the System whenever the mouse is moved.
function mouseMoved() {

  flock.addBoid(new Boid(mouseX,mouseY-30));
}


// Flock manages the array of all the boids
function Flock() {
  this.boids = [];
}

Flock.prototype.run = function() {
  for (var i = 0; i < this.boids.length; i++) {

    this.boids[i].run(this.boids);  // Passing the entire list of boids to each boid individually
  // console.log(this)
  }
}

Flock.prototype.addBoid = function(b) {
  this.boids.push(b);

  if(this.boids.length >70){
    this.boids.splice(0, this.boids.length-70)
    // this.boids.delete()

  }
  // console.log(this.boids.length)
}




// Boid class
// Methods for Separation, Cohesion, Alignment added

function Boid(x,y) {
  this.acceleration = createVector(0,0);
  this.velocity = createVector(random(-1,1),random(-1,1));
  this.position = createVector(x,y);
  this.r = 2.0;
  this.maxspeed = 1;    // Maximum speed
  this.maxforce = 0.005; // Maximum steering force
  this.lifespan = 134;
}

Boid.prototype.run = function(boids) {
  this.flock(boids);
  this.update();
  // this.borders();
  this.render();
}

Boid.prototype.applyForce = function(force) {
  // We could add mass here if we want A = F / M
  this.acceleration.add(force);
}

// We accumulate a new acceleration each time based on three rules
Boid.prototype.flock = function(boids) {
  var sep = this.separate(boids);   // Separation
  var ali = this.align(boids);      // Alignment
  var coh = this.cohesion(boids);   // Cohesion
  // Arbitrarily weight these forces
  // sep.mult(1.5);
  // ali.mult(1.0);
  // coh.mult(1.0);
  // Add the force vectors to acceleration
  // this.applyForce(sep);
  // this.applyForce(ali);
  // this.applyForce(coh);
}

// Method to update location
Boid.prototype.update = function() {
  // Update velocity
  this.velocity.add(this.acceleration);
  // Limit speed
  this.velocity.limit(this.maxspeed);
  this.position.add(this.velocity);
  // Reset accelertion to 0 each cycle
  this.acceleration.mult(0);
 
  this.lifespan--;
}


// A method that calculates and applies a steering force towards a target
// STEER = DESIRED MINUS VELOCITY
Boid.prototype.seek = function(target) {
  var desired = p5.Vector.sub(target,this.position);  // A vector pointing from the location to the target
  // Normalize desired and scale to maximum speed
  desired.normalize();
  desired.mult(this.maxspeed);
  // Steering = Desired minus Velocity
  var steer = p5.Vector.sub(desired,this.velocity);
  steer.limit(this.maxforce);  // Limit to maximum steering force
  return steer;
}

Boid.prototype.render = function() {
  // Draw a triangle rotated in the direction of velocity
 var r=150;
  var theta = this.velocity.heading() + radians(20);
 if (windowWidth>800){
  // 251, 91, 78
 
  // if(this.lifespan<80){
  // 		stroke( 255,112 +(134-this.lifespan) , 149 + (134-this.lifespan) );

  // }
  // else if (this.lifespan>80){
  // stroke(255,255 - this.lifespan , 255);
  // }
  stroke( 255,112 +(134-this.lifespan) , 149 + (134-this.lifespan) );
}
else{
  stroke(255, 175, 195);
}
  strokeWeight(1);
  push(); 
  translate(this.position.x,this.position.y);
  rotate(theta);
  beginShape();
  vertex(0, -this.r*10);
  vertex(-this.r*10, this.r*10);
  vertex(this.r*10, this.r*10);
  endShape(CLOSE);
  pop();
}

// Wraparound
Boid.prototype.borders = function() {
  if (this.position.x < -this.r)  this.position.x = width +this.r;
  if (this.position.y < -this.r)  this.position.y = height+this.r;
  if (this.position.x > width +this.r) this.position.x = -this.r;
  if (this.position.y > height+this.r) this.position.y = -this.r;
}

// Separation
// Method checks for nearby boids and steers away
Boid.prototype.separate = function(boids) {
  var desiredseparation = 100.0;
  var steer = createVector(0,0);
  var count = 0;
  // For every boid in the system, check if it's too close
  // for (var i = 0; i < boids.length; i++) {
   
  //      var d = p5.Vector.dist(this.position,boids[i].position);
  //   // If the distance is greater than 0 and less than an arbitrary amount (0 when you are yourself)
  //   if ((d > 0) && (d < desiredseparation)) {
  //     // Calculate vector pointing away from neighbor
  //     var diff = p5.Vector.sub(this.position,boids[i].position);
  //     diff.normalize();

  //     diff.div(d);        // Weight by distance
  //     steer.add(diff);
  //     count++;            // Keep track of how many
  //   }
  // }
  // Average -- divide by how many
  if (count > 0) {
    steer.div(count);
  }

  // As long as the vector is greater than 0
  if (steer.mag() > 0) {
    // Implement Reynolds: Steering = Desired - Velocity
    steer.normalize();
    steer.mult(this.maxspeed);
    steer.sub(this.velocity);
    steer.limit(this.maxforce);
  }
  return steer;
}

// Alignment
// For every nearby boid in the system, calculate the average velocity
Boid.prototype.align = function(boids) {

  var neighbordist = 50;
  var sum = createVector(0,0);
  var count = 0;
  for (var i = 0; i < boids.length; i++) {
    var d = p5.Vector.dist(this.position,boids[i].position);
    if ((d > 0) && (d < neighbordist)) {
      sum.add(boids[i].velocity);
      count++;
    }
  }
  if (count > 0) {
    sum.div(count);
    sum.normalize();
    sum.mult(this.maxspeed);
    var steer = p5.Vector.sub(sum,this.velocity);
    steer.limit(this.maxforce);
    return steer;
  } else {
    return createVector(0,0);
  }
}

// Cohesion
// For the average location (i.e. center) of all nearby boids, calculate steering vector towards that location
Boid.prototype.cohesion = function(boids) {
  var neighbordist = 50;
  var sum = createVector(0,0);   // Start with empty vector to accumulate all locations
   
  var count = 0;
  for (var i = 0; i < boids.length; i++) {
    var d = p5.Vector.dist(this.position,boids[i].position);
    if ((d > 0) && (d < neighbordist)) {
      sum.add(boids[i].position); // Add location
      count++;
    }
  }
  if (count > 0) {
    sum.div(count);
    return this.seek(sum);  // Steer towards the location
  } else {
    return createVector(0,0);
  }
}

/*This function puts the Canvas in the middle of the screen*/

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
}

/*This function adjusts the canvas so it will resize when the screen size changes*/
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
