/*********************
// Many Dots
// Description: Draws interactive dots on the screen
// Credit: 
*********************/


const manyDots = (s) => {
  let dot = [];
  let dotCount = 0;
  let r = 0;
  let animate = false;
  let removeDots = 0;
  let color1;
  let color2;
  let leavingSpeed;
  let lowerBound;
  let upperBound;

  s.setup  = () => {
   s.pixelDensity(1);
   let windowWidth = window.innerWidth ;
   let windowHeight = windowWidth  * 0.562;
   s.canvas = s.createCanvas(windowWidth, windowHeight);
   s.canvas.parent('video-overlay');
   s.background(51)
   s.fill(255,0,133);
   s.addDot();
   lowerBound = s.width/100;
   upperBound = s.width/35;
   leavingSpeed = .5;
 }


 s.draw  = () => {
  s.clear();
  color1 = s.map(s.mouseX, 0, s.width, 0, 255);
  color2 = s.map(s.mouseY, 0, s.width, 0, 255);

  s.fill(color1,color2,133);
  s.strokeWeight(2);  
  s.stroke(255,255,255);

  for(let i = 0; i < dot.length; i++){
    dot[i].display();
  }
  if(s.dotCount<40){
    s.addDot();
    s.addDot2();
  }
  else{
    for(let i = 0; i < dot.length; i++){
      dot[i].move();
    }
  }

  if(window.videoCurrentTimeGlobal > 68.5){

    for(let i = 0; i < dot.length; i++){
      if (s.dist(dot[i].x, dot[i].y, s.width / 1.5, s.height / 2) < (s.width/3.75) + r){
        if(dot[i].x > s.width / 2){
          dot[i].x = dot[i].x + leavingSpeed;
        }
        else{
         dot[i].x = dot[i].x - leavingSpeed;
       }
       if(dot[i].y > s.height/2){
        dot[i].y = dot[i].y + leavingSpeed;
      }
      else{
       dot[i].y = dot[i].y - leavingSpeed;
     }
     r++;
   }

   if(window.videoCurrentTimeGlobal>72){
     lowerBound = s.width/200;
     upperBound = s.width/70;
   }
   if(window.videoCurrentTimeGlobal>72){
     lowerBound = s.width/400;
     upperBound = s.width/140;
     leavingSpeed = 0.75
   }
 }
}

}
s.Dot = function(xcoord){
  this.x = xcoord;
  this.y = s.random(s.height);
  this.diameter = s.random(lowerBound, upperBound);
  this.speed = 1;
  this.move = function() {
    if (animate){
      this.x += 1;
      this.y += s.random(-this.speed, this.speed);
    }
    else{
      this.x += s.random(-this.speed, this.speed);
      this.y += s.random(-this.speed, this.speed);
    }
  };
  this.display = function() {
    s.ellipse(this.x, this.y, this.diameter, this.diameter);
  };
  this.animate = function() {
    this.x += 2;
    this.y += s.random(-this.speed, this.speed);
  };
}
s.addDot= function(){
  dot[dotCount] = new s.Dot(s.random(s.width/3.2));
  dotCount++;
}
s.addDot2= function(){
  dot[dotCount] = new s.Dot(s.random(s.width/1.40, s.width));
  dotCount++;
}
s.speedUp= function(){
  animate=true;
}



s.mouseMoved = function() {
  s.addDot(new s.Dot(s.mouseX));
  s.addDot2(new s.Dot(s.mouseX));
}



}




module.exports= manyDots;
