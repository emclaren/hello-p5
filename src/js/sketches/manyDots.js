/*********************
//Many dots that pop up on the screen
*********************/

var manyDots = function(t){
  t.xpos=100;
  t.ypos=100;
  t.dot = [];
  t.dotCount = 0;
  t.r=0;
  t.animate=false;
  t.removeDots=0;
  t.setup = function(){
   t.pixelDensity(1);
   t.windowWidth = window.innerWidth ;
   t.windowHeight = t.windowWidth * .562
   t.canvas= t.createCanvas(t.windowWidth, t.windowHeight);
   t.canvas.parent('video-overlay');
   t.background(51)
   t.fill(255,0,133);
   t.addDot();
   t.lowerBound=t.windowWidth/100;
   t.upperBound=t.windowWidth/35;
   t.leavingSpeed=.5
 }

 t.draw = function(){


  t.clear();
    // t.rect(0,0,t.windowWidth/3, t.windowHeight);
    t.color1=t.map(t.mouseX, 0, t.windowWidth, 0, 255);
    t.color2= t.map(t.mouseY, 0, t.windowWidth, 0, 255);

    t.fill(t.color1,t.color2,133);
    t.strokeWeight(2);  
    t.stroke(255,255,255);

    for(var i = 0; i<t.dot.length; i++){
      t.dot[i].display();
    }
    if(t.dotCount<40){
      t.addDot();
      t.addDot2();
    }
    else{
      for(var i = 0; i<t.dot.length; i++){
        t.dot[i].move();
      }
    }

    if(window.videoCurrentTimeGlobal>68.5){

      for(var i = 0; i<t.dot.length; i++){
        if (t.dist(t.dot[i].x, t.dot[i].y, t.windowWidth/1.5, t.windowHeight/2)<(t.windowWidth/3.75)+t.r){
          if(t.dot[i].x> t.windowWidth/2){
            t.dot[i].x=t.dot[i].x+t.leavingSpeed;
          }
          else{
           t.dot[i].x=t.dot[i].x-t.leavingSpeed;
         }
         if(t.dot[i].y> t.windowHeight/2){
          t.dot[i].y=t.dot[i].y+t.leavingSpeed;
        }
        else{
         t.dot[i].y=t.dot[i].y-t.leavingSpeed;
       }
       t.r++;


 
      }



     if(window.videoCurrentTimeGlobal>72){
     t.lowerBound=t.windowWidth/200;
    t.upperBound=t.windowWidth/70;
    }


    if(window.videoCurrentTimeGlobal>72){
     t.lowerBound=t.windowWidth/400;
    t.upperBound=t.windowWidth/140;
    t.leavingSpeed=.75
    }







    }
  }

}
t.Dot = function(xcoord){
  this.x = xcoord;
  this.y = t.random(t.windowHeight);
  this.diameter = t.random(t.lowerBound, t.upperBound);
  this.speed = 1;
  this.move = function() {
    if (t.animate){
      this.x += 1;
      this.y += t.random(-this.speed, this.speed);
    }
    else{
      this.x += t.random(-this.speed, this.speed);
      this.y += t.random(-this.speed, this.speed);
    }
  };
  this.display = function() {
    t.ellipse(this.x, this.y, this.diameter, this.diameter);
  };
  this.animate = function() {
    this.x += 2;
    this.y += t.random(-this.speed, this.speed);
  };
}
t.addDot= function(){
  t.dot[t.dotCount] = new t.Dot(t.random(t.windowWidth/3.2));
        // t.dot[t.dotCount] = new t.Dot(t.random(t.windowWidth/1.45, t.windowWidth));
        t.dotCount++;
      }
      t.addDot2= function(){
        // t.dot[t.dotCount] = new t.Dot(t.random(t.windowWidth/3));
        t.dot[t.dotCount] = new t.Dot(t.random(t.windowWidth/1.40, t.windowWidth));
        t.dotCount++;
      }
      t.speedUp= function(){
        t.animate=true;
      }



t.mouseMoved = function() {
    t.addDot(new t.Dot(t.mouseX));
    t.addDot2(new t.Dot(t.mouseX));
}




    }








    module.exports= manyDots;
