
var leaves= function(s){
s.sakuraNum = 100;

s.fubuki = [];

s.colors = [];
s.transparency;

  s.setup = function(){
    s.pixelDensity(1);
    s.windowWidth = window.innerWidth ;
    s.windowHeight = s.windowWidth * .5504
    s.canvas= s.createCanvas(s.windowWidth, s.windowHeight);
    s.canvas.parent('video-overlay');
    for (var i = 0; i < s.sakuraNum; i++) {
    s.fubuki.push(new s.Sakura());

  }

  s.noStroke();
  s.colors.push(s.color(0, 255, 255, 155));
  s.colors.push(s.color(237, 34, 93, 155));
  s.colors.push(s.color(0, 0, 2, 155));
 



  }


  s.draw = function(){
  // s.background(0,255,255);
    s.clear();
  for (var i = 0; i < s.sakuraNum; i++) {
    s.fubuki[i].draw();
    s.fubuki[i].move();
  }
  s.cutout();
}


s.Sakura = function() {
  s.n = 4;
  s.A, s.md, s.r, s.x, s.y;

  this.xDef = s.random(s.windowWidth);
  
  this.xAmp = s.random(50,100);
  this.xSpeed = s.random(1,2);
  this.xTheta = s.random(360);
  
  this.ox = this.xDef + this.xAmp * s.sin(s.radians(this.xTheta));
  this.oy = s.random(s.windowHeight);
  this.rotateT = s.random(360);
  this.size = s.random(20, 50);

  this.ySpeed = this.size / 20;
  this.sizeYScale = 1;
  this.sizeYT = s.random(360);
  this.sizeYSpeed = this.size / 30;
  this.c = s.floor(s.random(3));

  this.draw = function() {
    s.fill(s.colors[this.c]);

    s.push();
    s.translate(this.ox, this.oy);
    s.rotate(s.radians(this.rotateT));
    

  s.beginShape();
  s. vertex(s.random(10), 20);
  s.vertex(s.random(10), 10);
  s.vertex(s.random(10), 10);
  s.vertex(s.random(10), 15);


    // for (var t = 0; t < 360 / 4; t++) {
    //   s.A = s.n / s.PI * s.radians(s.t);

    //   s.md = s.floor(s.A) % 2;

    //   s.r = s.pow(-1, s.md) * (s.A - s.floor(s.A)) + s.md;

    //   s.R = s.r + 2 * s.calcH(s.r);

    //   s.x = this.size * s.R * s.cos(s.radians(s.t));
    //   s.y = this.size * this.sizeYScale * s.R * s.sin(s.radians(s.t));

      // s.x = s.random(s.windowWidth)
      // s.y = s.random(s.windowWidth)


      // s.vertex(s.x, s.y);
      //  s.vertex(s.y, s.x);
    // }
    s.endShape(s.CLOSE);
    // s.ellipse(s.random(s.windowWidth),s.random(s.windowWidth),s.random(s.windowWidth),s.random(s.windowWidth),)
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

    if(s.dist(s.mouseX, s.mouseY, this.ox, this.oy)<(s.windowWidth/10)){
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
  ctx.clearRect((s.width/2)-((s.windowWidth/3.2)/3),0,  s.windowWidth/3.2 ,s.windowHeight);
}



//  window.onresize =  function() {
//       s.windowWidth = window.innerWidth ;
//     s.windowHeight = s.windowWidth * .5504
//     s.resizeCanvas(s.windowWidth, s.windowWidth * .5504);
// } 
}



module.exports= leaves;




