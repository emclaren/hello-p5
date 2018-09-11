/*********************
// Leaves
// Description: Draws randomly falling leaves 
// Credit: waiting for release
*********************/


const leaves = (s) => {

  let sakuraNum = 100;
  let fubuki = [];
  let colors = [];
  let transparency;

  s.setup  = () => {
   s.pixelDensity(1);
   let windowWidth = window.innerWidth ;
   let windowHeight = windowWidth  * 0.562;
   s.canvas = s.createCanvas(windowWidth, windowHeight);
   s.canvas.parent('video-overlay');
   for (let i = 0; i < sakuraNum; i++) {
    fubuki.push(new s.Sakura());

  }

  s.noStroke();
  colors.push(s.color(0, 255, 255, 155));
  colors.push(s.color(237, 34, 93, 155));
  colors.push(s.color(0, 0, 2, 155));

}


s.draw = () => {
  // s.background(0,255,255);
  s.clear();
  for (let i = 0; i < sakuraNum; i++) {
    fubuki[i].draw();
    fubuki[i].move();
  }

  if(window.videoCurrentTimeGlobal > 22){
    sakuraNum--
  }
  s.cutout();
}


s.Sakura = function() {
  let n = 4;
  let a, md, r, x, y;
  this.xDef = s.random(s.width);
  
  this.xAmp = s.random(50,100);
  this.xSpeed = s.random(1,2);
  this.xTheta = s.random(360);
  
  this.ox = this.xDef + this.xAmp * s.sin(s.radians(this.xTheta));
  this.oy = s.random(s.height);
  this.rotateT = s.random(360);
  this.size = s.random(20, 50);

  this.ySpeed = this.size / 20;
  this.sizeYScale = 1;
  this.sizeYT = s.random(360);
  this.sizeYSpeed = this.size / 30;
  this.c = s.floor(s.random(3));

  if(window.videoCurrentTimeGlobal > 23){
    this.xSpeed -= 1
    this.ySpeed -= 1
  }
  this.draw = function() {
    s.fill(colors[this.c]);
    s.push();
    s.translate(this.ox, this.oy);
    s.rotate(s.radians(this.rotateT));
    s.beginShape();
    s.vertex(s.random(10), 20);
    s.vertex(s.random(10), 10);
    s.vertex(s.random(10), 10);
    s.vertex(s.random(10), 15);
    s.endShape(s.CLOSE);
    s.pop();
  };

  this.move = function() {
    this.ox = this.xDef + this.xAmp * s.sin(s.radians(this.xTheta));
    this.xTheta += this.xSpeed;
    
    this.oy += this.ySpeed;
    this.sizeYT += this.sizeYSpeed;
    this.sizeYScale = s.abs(s.sin(s.radians(this.sizeYT)));

    if (this.oy > s.windowHeight + this.size) {
      this.oy = -this.size;
    }

    if(s.dist(s.mouseX, s.mouseY, this.ox, this.oy)<(s.width/10)){
      this.ySpeed = s.random(-15,15);
      this.xSpeed = s.random(10,15);

      s.fill(255,0,0)
    }
    else{
     this.ySpeed = this.size / 20;
     this.xSpeed = s.random(1,2);
   }
 };
}

s.calcH = function(x) {
  if (x < 0.8) {
    return 0;
  } else {
    return 0.8 - x;
  }
}


s.cutout =function(){
  var c=document.getElementById("defaultCanvas0");
  var ctx=c.getContext("2d");
  ctx.clearRect((s.width/2)-((s.width/3.2)/3),0,  s.width/3.2 ,s.height);
}

}



module.exports = leaves;




