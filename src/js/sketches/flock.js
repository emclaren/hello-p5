/*********************
// Flock
// Description: Draws randomly falling leaves 
// Credit:
// Link
*********************/


const p5 = require('p5'); // P5 Source Code

const flock = (s) => {
 let boidnum=1;
 let flock;
 let r;
 let time=0;
 let b

 s.setup  = () => {
   s.pixelDensity(1);
   let windowWidth = window.innerWidth ;
   let windowHeight = windowWidth  * 0.562;
   s.canvas = s.createCanvas(windowWidth, windowHeight);
   s.canvas.parent('video-overlay');

   flock = new s.Flock();

    // Add an initial set of boids into the system
    b = new s.Boid(s.random(s.width/4), s.random(s.height));
    flock.addBoid(b);
  }




  s.draw = () => {
    if(boidnum%100==0 && boidnum<800){
  // Add an initial set of boids into the system
  b = new s.Boid(s.random(s.width/4),s.random(s.height));
  flock.addBoid(b);

  if(window.videoCurrentTimeGlobal>143.0 && window.videoCurrentTimeGlobal<145.0){
    s.fill('hotpink');
    s.textSize(32);
    s.text("special thanks to...", 100, s.height/2);
    s.text("List Names", 200, s.height/2);
    s.text("List Names", 250, s.height/2);
    s.text("List Names", 300, s.height/2);
    s.text("List Names", 400, s.height/2);
  }

  if(window.videoCurrentTimeGlobal>145.0 && window.videoCurrentTimeGlobal<149.0){
    s.text("to view the examples Click Here", 100, s.height/2);
  }


  if(window.videoCurrentTimeGlobal>149.0){
    s.text("This project was completed as part of GSOC", 100, s.height/2);
  }
}

boidnum++;
s.noFill();
    // s.fill(255,255,255,100)
    s.clear();
    flock.run();
    time++;
        // this.boids.splice(0, this.boids.length-20)

        if(window.videoCurrentTimeGlobal<138.5){
          s.cutout();
        }
      }




      s.mouseMoved = function() {

if(s.dist(s.mouseX, s.mouseY, s.pmouseX, s.pmouseY)>50){
  flock.addBoid(new s.Boid(s.mouseX,s.mouseY));

}


}



s.Flock = function() {
  this.boids = [];
}




s.Flock.prototype.run = function() {
  for (let i = 0; i < this.boids.length; i++) {
    this.boids[i].run(this.boids);  // Passing the entire list of boids to each boid individually
  }
}

s.Flock.prototype.addBoid = function(b) {
  this.boids.push(b);
  if(this.boids.length > 20){
    this.boids.splice(0, this.boids.length-20)
  }
}




// Boid class
// Methods for Separation, Cohesion, Alignment added

s.Boid =function (x,y) {
  this.acceleration = s.createVector(0,0);
  this.velocity = s.createVector(s.random(-1,1),s.random(-1,1));
  this.position = s.createVector(x,y);
  this.r = 3.0;
  this.maxspeed = 2;    // Maximum speed
  this.maxforce = 0.1; // Maximum steering force
  this.lifespan = 134;
}


s.Boid.prototype.run = function(boids) {
  this.flock(boids);
  this.update();
  this.borders();
  this.render();
}


s.Boid.prototype.applyForce = function(force) {
  // We could add mass here if we want A = F / M
  this.acceleration.add(force);
}



// We accumulate a new acceleration each time based on three rules
s.Boid.prototype.flock = function(boids) {
  let sep = this.separate(boids);   // Separation
  let ali = this.align(boids);      // Alignment
  let coh = this.cohesion(boids);   // Cohesion
  // Arbitrarily weight these forces
  
  sep.mult(1.5);
  ali.mult(1.0);
  coh.mult(1.0);
  // Add the force vectors to acceleration
  this.applyForce(sep);
  this.applyForce(ali);
  this.applyForce(coh);
}




// Method to update location
s.Boid.prototype.update = function() {
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
s.Boid.prototype.seek = function(target) {
  let desired = p5.Vector.sub(target, this.position);  // A vector pointing from the location to the target
  // Normalize desired and scale to maximum speed
  desired.normalize();
  desired.mult(this.maxspeed);
  // Steering = Desired minus Velocity
  steer = p5.Vector.sub(desired,this.velocity);
  steer.limit(this.maxforce);  // Limit to maximum steering force
  return steer;
}




s.Boid.prototype.render = function() {
  // Draw a triangle rotated in the direction of velocity
 let theta = this.velocity.heading() +s.radians(90);

  s.stroke( 255,112 +(134-this.lifespan) , 149 + (134-this.lifespan), 150 );
// }
// else{
//   s.stroke(255, 175, 195);
// }
s.strokeWeight(3);
s.push(); 
s.translate(this.position.x,this.position.y);
s.rotate(theta);
s.beginShape();
s.vertex(0, -this.r*10);
s.vertex(-this.r*10, this.r*10);
s.vertex(this.r*10, this.r*10);
s.endShape(s.CLOSE);
s.pop();
}

// Wraparound
s.Boid.prototype.borders = function() {
  if (this.position.x < -this.r)  this.position.x = s.width +this.r;
  if (this.position.y < -this.r)  this.position.y = s.height+this.r;
  if (this.position.x > s.width +this.r) this.position.x = -this.r;
  if (this.position.y > s.height+this.r) this.position.y = -this.r;
}

// Separation
// Method checks for nearby boids and steers away
s.Boid.prototype.separate = function(boids) {
  let desiredseparation = 25.0;
  let steer = s.createVector(0,0);
  let count = 0;
  // For every boid in the system, check if it's too close
  for (let i = 0; i < boids.length; i++) {

  let d = p5.Vector.dist(this.position,boids[i].position);
    // If the distance is greater than 0 and less than an arbitrary amount (0 when you are yourself)
    if ((d > 0) && (d < desiredseparation)) {
      // Calculate vector pointing away from neighbor
      let diff = p5.Vector.sub(this.position,boids[s.i].position);
      diff.normalize();

      diff.div(d);        // Weight by distance
      steer.add(diff);
      count++;            // Keep track of how many
    }
  }
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
  return s.steer;
}



// Alignment
// For every nearby boid in the system, calculate the average velocity
s.Boid.prototype.align = function(boids) {

  let neighbordist = 50;
  let sum = s.createVector(0,0);
  let count = 0;
  for (let i = 0; i < boids.length; i++) {
    let d =p5.Vector.dist(this.position, boids[i].position); 
    // s.p5.Vector.dist(this.position,s.boids[s.i].position); //this is the part i commented out for testing
    if ((d > 0) && (d < neighbordist)) {
     sum.add(boids[i].velocity);
     count++;
   }
 }
 if (count > 0) {
  sum.div(count);
  sum.normalize();
  sum.mult(this.maxspeed);
  steer = p5.Vector.sub(sum,this.velocity);
  steer.limit(this.maxforce);
  return steer;
} else {
  return s.createVector(0,0);
}
}





// Cohesion
// For the average location (i.e. center) of all nearby boids, calculate steering vector towards that location
s.Boid.prototype.cohesion = function(boids) {
  let neighbordist = 50;
  let sum = s.createVector(0,0);   // Start with empty vector to accumulate all locations

  let count = 0;
  for (let i = 0; i < boids.length; i++) {
    let d=p5.Vector.dist(this.position, boids[i].position);
    if ((d > 0) && (d < neighbordist)) {
      sum.add(boids[i].position); // Add location
      count++;
    }
  }
  if (count > 0) {
    sum.div(count);
    return this.seek(sum);  // Steer towards the location
  } else {
    return s.createVector(0,0);
  }
}
s.cutout =function(){
  var c=document.getElementById("defaultCanvas0");
  var ctx=c.getContext("2d");
  ctx.clearRect((s.width/2)-((s.windowWidth/1.18)/2),0,  s.windowWidth/1.18 ,s.windowHeight);
}

}


module.exports= flock;










