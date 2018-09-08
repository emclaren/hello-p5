

const p5 = require('p5'); // P5 Source Code

var flock= function(s){
 s.boidnum=1;
  s.flock;
  s.r;
s.time=0;

  s.setup = function(){
    s.pixelDensity(1);
    s.windowWidth = window.innerWidth ;
    s.windowHeight = s.windowWidth * .562
    s.canvas= s.createCanvas(s.windowWidth, s.windowHeight);
    s.canvas.parent('video-overlay');

       s.flock = new s.Flock();

  // Add an initial set of boids into the system
  // for (var i = 0; i < 1; i++) {
    // s.b = new s.Boid(s.windowWidth/1.2,s.windowHeight/1.2);
      s.b = new s.Boid(s.random(s.windowWidth/4),s.random(s.windowHeight));
         // s.c = new s.Boid(s.random(s.windowWidth- s.windowWidth/4, s.windowWidth),s.random(s.windowHeight));
    s.flock.addBoid(s.b);
    // s.flock.addBoid(s.c);

  // }

  //   for (var i = 0; i < 4; i++) {
  //   // s.b = new s.Boid(s.windowWidth/1.2,s.windowHeight/1.2);
  //     // s.b = new s.Boid(s.random(s.windowWidth/4),s.random(s.windowHeight/4));
  //     //  s.b = new s.Boid(s.random(s.windowWidth/2, s.windowWidth),s.random(s.windowHeight));
  //     // s.b = new s.Boid(s.random(s.windowWidth),s.random(s.windowHeight));
  //           s.b = new s.Boid(s.windowWidth,s.windowHeight);
  //               s.c = new s.Boid(0,0);
  //                         s.d = new s.Boid(0,s.windowHeight);
  //                            s.e = new s.Boid(s.windowWidth,0);
  //   // s.flock.addBoid(s.b);
  //   s.flock.addBoid(s.b);
  //   s.flock.addBoid(s.c);
  //       s.flock.addBoid(s.d);
  //        s.flock.addBoid(s.e);

  // }


}







s.draw = function(){
  if(s.boidnum%100==0 && s.boidnum<800){
  // Add an initial set of boids into the system
   s.b = new s.Boid(s.random(s.windowWidth/4),s.random(s.windowHeight));
         // s.c = new s.Boid(s.random(s.windowWidth- s.windowWidth/4, s.windowWidth),s.random(s.windowHeight));
    s.flock.addBoid(s.b);
    // s.flock.addBoid(s.c);

     if(window.videoCurrentTimeGlobal>143.0&&window.videoCurrentTimeGlobal<145.0){

    s.fill('hotpink')
    s.textSize(32);
    s.text("special thanks to...", 100, s.windowHeight/2);
    s.text("List Names", 200, s.windowHeight/2);
    s.text("List Names", 250, s.windowHeight/2);
    s.text("List Names", 300, s.windowHeight/2);
    s.text("List Names", 400, s.windowHeight/2);
}
       if(window.videoCurrentTimeGlobal>145.0 &&window.videoCurrentTimeGlobal<149.0){
    s.text("to view the examples Click Here", 100, s.windowHeight/2);
   }


         if(window.videoCurrentTimeGlobal>149.0){
    s.text("This project was completed as part of GSOC", 100, s.windowHeight/2);
   }
  // for (var i = 0; i < s.boidnum; i++) {
  //   // s.b = new s.Boid(s.windowWidth/1.2,s.windowHeight/1.2);
     

  // }
}
s.boidnum++;
    s.noFill();
    // s.fill(255,255,255,100)
    s.clear();
    s.flock.run();
    s.time++;
        // this.boids.splice(0, this.boids.length-20)
 
  if(window.videoCurrentTimeGlobal<138.5){
s.cutout();
}
  }




s.mouseMoved = function() {
// s.background(255,0,=0);
// console.log("distance"+s.dist(s.mouseX, s.mouseY, s.pmouseX, s.pmouseY))
if(s.dist(s.mouseX, s.mouseY, s.pmouseX, s.pmouseY)>50){
  console.log("went 50 distance")
  s.flock.addBoid(new s.Boid(s.mouseX,s.mouseY));

}

    
}



  s.Flock = function() {
    this.boids = [];
  }




  s.Flock.prototype.run = function() {
    for (var i = 0; i < this.boids.length; i++) {
    this.boids[i].run(this.boids);  // Passing the entire list of boids to each boid individually
  }
}

s.Flock.prototype.addBoid = function(b) {
  this.boids.push(b);
   if(this.boids.length >20){
    this.boids.splice(0, this.boids.length-20)
    // this.boids.delete()

  }
  //    if(this.boids.length >20){
  //   this.boids.splice(15, this.boids.length-20)
    // this.boids.delete()

  // }

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
  s.sep = this.separate(boids);   // Separation
  s.ali = this.align(boids);      // Alignment
  s.coh = this.cohesion(boids);   // Cohesion
  // Arbitrarily weight these forces
  s.sep.mult(1.5);
  s.ali.mult(1.0);
  s.coh.mult(1.0);
  // Add the force vectors to acceleration
  this.applyForce(s.sep);
  this.applyForce(s.ali);
  this.applyForce(s.coh);
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
  s.desired = p5.Vector.sub(target,this.position);  // A vector pointing from the location to the target
  // Normalize desired and scale to maximum speed
  s.desired.normalize();
  s.desired.mult(this.maxspeed);
  // Steering = Desired minus Velocity
  s.steer = p5.Vector.sub(s.desired,this.velocity);
  s.steer.limit(this.maxforce);  // Limit to maximum steering force
  return s.steer;
}




s.Boid.prototype.render = function() {
  // Draw a triangle rotated in the direction of velocity
 // s.r=150;
 s.theta = this.velocity.heading() +s.radians(90);
 // s.stroke(233,100,250);


//  if (s.windowWidth>800){

  s.stroke( 255,112 +(134-this.lifespan) , 149 + (134-this.lifespan), 150 );
// }
// else{
//   s.stroke(255, 175, 195);
// }
s.strokeWeight(3);
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
  if (this.position.x < -this.r)  this.position.x = s.windowWidth +this.r;
  if (this.position.y < -this.r)  this.position.y = s.windowHeight+this.r;
  if (this.position.x > s.windowWidth +this.r) this.position.x = -this.r;
  if (this.position.y > s.windowHeight+this.r) this.position.y = -this.r;
}

// Separation
// Method checks for nearby boids and steers away
s.Boid.prototype.separate = function(boids) {
  s.desiredseparation = 25.0;
  s.steer = s.createVector(0,0);
  s.count = 0;
  // For every boid in the system, check if it's too close
  for (s.i = 0; s.i < boids.length; s.i++) {

   s.d = p5.Vector.dist(this.position,boids[s.i].position);
    // If the distance is greater than 0 and less than an arbitrary amount (0 when you are yourself)
    if ((s.d > 0) && (s.d < s.desiredseparation)) {
      // Calculate vector pointing away from neighbor
      s.diff = p5.Vector.sub(this.position,boids[s.i].position);
      s.diff.normalize();

      s.diff.div(s.d);        // Weight by distance
      s.steer.add(s.diff);
      s.count++;            // Keep track of how many
    }
  }
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
    s.d =p5.Vector.dist(this.position, boids[s.i].position); 
    // s.p5.Vector.dist(this.position,s.boids[s.i].position); //this is the part i commented out for testing
    if ((s.d > 0) && (s.d < s.neighbordist)) {
     s.sum.add(boids[s.i].velocity);
     s.count++;
   }
 }
 if (s.count > 0) {
  s.sum.div(s.count);
  s.sum.normalize();
  s.sum.mult(this.maxspeed);
  s.steer = p5.Vector.sub(s.sum,this.velocity);
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
  console.log("boids length" + boids.length)
  for (s.i = 0; s.i < boids.length; s.i++) {
    s.d=p5.Vector.dist(this.position, boids[s.i].position);
    if ((s.d > 0) && (s.d < s.neighbordist)) {
      s.sum.add(boids[s.i].position); // Add location
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
s.cutout =function(){
  var c=document.getElementById("defaultCanvas0");
  var ctx=c.getContext("2d");
  ctx.clearRect((s.width/2)-((s.windowWidth/1.18)/2),0,  s.windowWidth/1.18 ,s.windowHeight);
}


}



module.exports= flock;















