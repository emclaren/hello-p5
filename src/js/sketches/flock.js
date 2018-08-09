






var flock= function(s){



s.flock;
s.r;
function setup() {






}


  s.setup = function(){
    s.pixelDensity(1);
    s.windowWidth = window.innerWidth ;
    s.windowHeight = s.windowWidth * .5504
    s.canvas= s.createCanvas(s.windowWidth, s.windowHeight);
    s.canvas.parent('video-overlay');
       // s.centerCanvas();
  s.flock = new s.Flock();
  s.frameRate(40);
  // Add an initial set of boids into the system
  for (s.i = 0; s.i < 9; s.i++) {
    s.b = new s.Boid(5,1000);
    s.flock.addBoid(s.b);

  }
  }





  s.draw = function(){

  s.clear();
  s.flock.run();

}


s.Flock = function() {
  this.boids = [];
}

s.Flock.prototype.run = function() {
  for (s.i = 0; s.i < this.boids.length; s.i++) {

    this.boids[s.i].run(this.boids);  // Passing the entire list of boids to each boid individually
  // console.log(this)
  }
}

s.Flock.prototype.addBoid = function(b) {
  this.boids.push(b);

  if(this.boids.length >70){
    this.boids.splice(0, this.boids.length-70)
    // this.boids.delete()

  }
  // console.log(this.boids.length)
}



// Boid class
// Methods for Separation, Cohesion, Alignment added

s.Boid =function (x,y) {
  this.acceleration = s.createVector(0,0);
  this.velocity = s.createVector(s.random(-1,1),s.random(-1,1));
  this.position = s.createVector(x,y);
  this.r = 2.0;
  this.maxspeed = 1;    // Maximum speed
  this.maxforce = 0.005; // Maximum steering force
  this.lifespan = 134;
}

s.Boid.prototype.run = function(boids) {
  this.flock(boids);
  this.update();
  // this.borders();
  this.render();
}

s.Boid.prototype.applyForce = function(force) {
  // We could add mass here if we want A = F / M
  this.acceleration.add(force);
}

// We accumulate a new acceleration each time based on three rules
s.Boid.prototype.flock = function(boids) {
  s.sep = this.separate(boids);   // Separation
  s.ali = this.align(boids);      // Alignment
  s.coh = this.cohesion(boids);   // Cohesion
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
  s.desired = s.p5.Vector.sub(s.target,this.position);  // A vector pointing from the location to the target
  // Normalize desired and scale to maximum speed
  s.desired.normalize();
  s.desired.mult(this.maxspeed);
  // Steering = Desired minus Velocity
  s.steer = s.p5.Vector.sub(s.desired,this.velocity);
  s.steer.limit(this.maxforce);  // Limit to maximum steering force
  return s.steer;
}

s.Boid.prototype.render = function() {
  // Draw a triangle rotated in the direction of velocity
 s.r=150;
  s.theta = this.velocity.heading() +s.radians(20);
 if (s.windowWidth>800){
  // 251, 91, 78
 
  // if(this.lifespan<80){
  //    stroke( 255,112 +(134-this.lifespan) , 149 + (134-this.lifespan) );

  // }
  // else if (this.lifespan>80){
  // stroke(255,255 - this.lifespan , 255);
  // }
  s.stroke( 255,112 +(134-this.lifespan) , 149 + (134-this.lifespan) );
}
else{
  s.stroke(255, 175, 195);
}
  s.strokeWeight(1);
  s.push(); 
  s.translate(this.position.x,this.position.y);
  s.rotate(s.theta);
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
  s.desiredseparation = 100.0;
  s.steer = s.createVector(0,0);
  s.count = 0;
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
  if (s.count > 0) {
    s.steer.div(s.count);
  }

  // As long as the vector is greater than 0
  if (s.steer.mag() > 0) {
    // Implement Reynolds: Steering = Desired - Velocity
    s.steer.normalize();
    s.steer.mult(this.maxspeed);
    s.steer.sub(this.velocity);
    s.steer.limit(this.maxforce);
  }
  return s.steer;
}

// Alignment
// For every nearby boid in the system, calculate the average velocity
s.Boid.prototype.align = function(boids) {

  s.neighbordist = 50;
  s.sum = s.createVector(0,0);
  s.count = 0;
  for (s.i = 0; s.i < boids.length; s.i++) {
    s.d = s.p5.Vector.dist(this.position,s.boids[s.i].position);
    if ((s.d > 0) && (s.d < s.neighbordist)) {
     s.sum.add(boids[s.i].velocity);
      s.count++;
    }
  }
  if (s.count > 0) {
    s.sum.div(count);
    s.sum.normalize();
    s.sum.mult(this.maxspeed);
    s.steer = s.p5.Vector.sub(s.sum,this.velocity);
    s.steer.limit(this.maxforce);
    return s.steer;
  } else {
    return s.createVector(0,0);
  }
}

// Cohesion
// For the average location (i.e. center) of all nearby boids, calculate steering vector towards that location
s.Boid.prototype.cohesion = function(boids) {
  s.neighbordist = 50;
  s.sum = s.createVector(0,0);   // Start with empty vector to accumulate all locations
   
  s.count = 0;
  for (s.i = 0; s.i < s.boids.length; s.i++) {
    s.d = s.p5.Vector.dist(this.position, s.boids[s.i].position);
    if ((s.d > 0) && (s.d < s.neighbordist)) {
      s.sum.add(s.boids[s.i].position); // Add location
      s.count++;
    }
  }
  if (s.count > 0) {
    s.sum.div(s.count);
    return this.seek(s.sum);  // Steer towards the location
  } else {
    return s.createVector(0,0);
  }
}




  if (s.frameCount > 600 == 0) {
    s.rotate(s.PI / 3.0);
  }


  s.resize =  function() {
      s.windowWidth = window.innerWidth ;
    s.windowHeight = s.windowWidth * .5504
    s.resizeCanvas(s.windowWidth, s.windowWidth * .5504);
    console.log(s.windowWidth)

} 

window.onresize = s.resize;

}

module.exports= flock;


































