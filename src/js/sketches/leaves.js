/*********************
// Leaves
// Description: Draws randomly falling leaves 
// Credit: waiting for release
*********************/
const leaves = (p5) => {  
  let sakuraNum = 100; // number of leaf objects
  let fubuki = []; // array of leaf objects
  let colors = [];  // array containing the colors
  let vertexPoint;
  p5.setup  = () => {
    p5.pixelDensity(1);
    let windowWidth = window.innerWidth ;
    let windowHeight = windowWidth  * 0.562;
    p5.canvas = p5.createCanvas(windowWidth, windowHeight);
    p5.canvas.parent('video-overlay');
    for (let i = 0; i < sakuraNum; i++) {
      fubuki.push(new p5.Sakura());
    }
    p5.noStroke();
    colors.push(p5.color(0, 255, 255, 155));
    colors.push(p5.color(237, 34, 93, 155));
    colors.push(p5.color(0, 0, 2, 155));
  }
  
  p5.draw = () => {
    p5.clear();
    for (let i = 0; i < sakuraNum; i++) {
      fubuki[i].draw();
      fubuki[i].move();
    }
    // Reduce the number of leaves as the 
    if(window.videoCurrentTimeGlobal > 22){
      sakuraNum--;
    }  
    // Hide part of the canvas to prevent the leaves from falling over the person in the video
    p5.cutout();
  };
  
  p5.Sakura = function() {
    this.xDef = p5.random(p5.width); 
    this.xAmp = p5.random(50,100);
    this.xSpeed = p5.random(1,2); 
    this.xTheta = p5.random(360);
    this.xcoord= this.xDef + this.xAmp * p5.sin(p5.radians(this.xTheta));
    this.ycoord = p5.random(p5.height);
    this.rotateT = p5.random(360);
    this.size = p5.random(20, 50);
    this.ySpeed = this.size / 20;
    this.sizeYScale = 1;
    this.sizeYT = p5.random(360);
    this.sizeYSpeed = this.size / 30;
    this.c = p5.floor(p5.random(3));
    // make leaf size responsive
    if(p5.width>740){
      vertexPoint=p5.width/110;
    }else{
      vertexPoint=p5.width/80;
    }
    // Create each leaf
    this.draw = function() {
      p5.fill(colors[this.c]);
      p5.push();
      p5.translate(this.xcoord, this.ycoord);
      p5.rotate(p5.radians(this.rotateT));
      p5.beginShape();
      p5.vertex(p5.random(vertexPoint), vertexPoint*2);
      p5.vertex(p5.random(vertexPoint), vertexPoint);
      p5.vertex(p5.random(vertexPoint), vertexPoint);
      p5.vertex(p5.random(vertexPoint), vertexPoint*1.5);
      p5.endShape(p5.CLOSE);
      p5.pop();
    };
    // make the leaf fall.
    this.move = function() {
      this.xcoord = this.xDef + this.xAmp * p5.sin(p5.radians(this.xTheta));
      this.xTheta += this.xSpeed;
      this.ycoord += this.ySpeed;
      this.sizeYT += this.sizeYSpeed;
      this.sizeYScale = p5.abs(p5.sin(p5.radians(this.sizeYT)));
      // reset leaf to top once it goes fully off the screen
      if (this.ycoord > p5.height + this.size) {
        this.ycoord = 0;
      }
      // change speed of the leaf depending on the mouse position 
      if(p5.dist(p5.mouseX, p5.mouseY, this.xcoord, this.ycoord)<(p5.width/10)){
        // move fast when close
        this.ySpeed = p5.random(-15,15); 
        this.xSpeed = p5.random(10,15);
      }
      else{
        // move slower when far
        this.ySpeed = this.size / 20;
        this.xSpeed = p5.random(1,2);
      }
    };
  };
  
  // Hide part of the canvas to prevent the leaves from falling over the person in the video
  p5.cutout =function(){
    var c=document.getElementById("defaultCanvas0");
    var ctx=c.getContext("2d");
    ctx.clearRect((p5.width/2)-((p5.width/3.2)/3),0,  p5.width/3.2 ,p5.height);
  };
};



module.exports = leaves;




