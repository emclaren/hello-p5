

// https://www.openprocessing.org/sketch/559382


var stars= function(s){

s.stars = [];
s.starsNum = 800;
s.colorFill="#000015";

  s.setup = function(){
    s.pixelDensity(1);
    s.windowWidth = window.innerWidth/3 ;
    s.windowHeight = window.innerWidth * .5504
    s.canvas= s.createCanvas(s.windowWidth, s.windowHeight);
    s.canvas.parent('video-overlay');
       s.noStroke();
       s.frameRate(60)

  for (s.i = 0; s.i < s.starsNum; s.i++) {
    if (s.i < s.starsNum / 3) {
      s.starColor = "yellow";
    } else if (s.i < s.starsNum * 2 / 3) {
      s.starColor = "magenta";
    } else {
      s.starColor = "cyan";
    }
    s.stars.push(new s.Star(s.starColor));
  }
 
  }





 s.draw = function(){

 s.blendMode(s.BLEND);
 s.background(0);

  s.blendMode(s.ADD);
  for (s.i = 0; s.i < s.starsNum; s.i++) {
    s.stars[s.i].display();
  }
}


s.Star=function(tmpColorName) {
  this.R = 150;
  this.x = this.R * s.randomGaussian();
  this.y = this.R * s.randomGaussian();
  this.r = s.random(3, 20) * 5;
  this.colorName = s.tmpColorName;
  this.theta = 0;

  switch (this.colorName) {
    case "cyan":
      s.colorFill = s.color("#00ffff15");
      this.speed = 1;
      break;
    case "magenta":
      s.colorFill = s.color("#ff00ff15");
      this.speed = 2;
      break;
    case "yellow":
      s.colorFill = s.color("#ffff0015");
      this.speed = 0.25;
      break;
  }

  this.display = function() {

    s.fill("#ffff0015");
    s.push();
    s.translate(s.windowWidth / 2, s.windowHeight / 2);
    s.rotate(s.radians(this.theta));
    s.ellipse(this.x, this.y, this.r, this.r);
    s.pop();


    this.theta += this.speed;
  }
}





  s.resize =  function() {
      s.windowWidth = window.innerWidth ;
    s.windowHeight = s.windowWidth * .5504
    s.resizeCanvas(s.windowWidth, s.windowWidth * .5504);
    console.log(s.windowWidth)

} 

window.onresize = s.resize;

}

module.exports= stars;




