

// https://www.openprocessing.org/sketch/559382


var stars= function(s){

  s.stars = [];
  s.starsNum = 800;
// s.colorFill="#000015";

s.setup = function(){
  s.pixelDensity(1);
  s.windowWidth = window.innerWidth ;
  s.windowHeight = window.innerWidth * .562
  s.canvas= s.createCanvas(s.windowWidth, s.windowHeight);
  s.canvas.parent('video-overlay');
  s.noStroke();
  s.frameRate(60)

  for (s.i = 0; s.i < s.starsNum; s.i++) {
    if (s.i < s.starsNum / 3) {
      s.starColor = "green";
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
 s.clear();
 s.blendMode(s.ADD);
 s.variableSpeed=s.map(s.mouseX, 0, s.windowWidth, 0, 1.5)
 for (s.i = 0; s.i < s.starsNum; s.i++) {
  s.stars[s.i].display();
}
s.cutout();
}

s.Star=function(tmpColorName) {
  this.R = 150;
  this.x = this.R * s.randomGaussian();
  this.y = this.R * s.randomGaussian();
  this.r = s.random(3, 20) * 5;
  this.theta = 0;
  this.colorName = tmpColorName;
  switch (this.colorName) {
    case "cyan":
    this.color = s.color("#00ffff15");

    this.speed = 1;
    break;
    case "magenta":
    this.color = s.color("#ff00ff15");
    this.speed = 2;
    break;
    case "green":
    this.color = s.color("#ffff0015");
    this.speed = 0.25;
    break;
    default:
    s.colorFill = s.color("#000000");
    this.speed = 0.25;
  }

  this.display = function() {
    s.fill(this.color);
    s.push();
    s.translate(s.windowWidth / 2, s.windowHeight / 2);
    s.rotate(s.radians(this.theta));
    s.ellipse(this.x, this.y, this.r, this.r);
    s.pop();
    this.theta += this.speed+s.variableSpeed;
  }
}

s.cutout =function(){
  var c=document.getElementById("defaultCanvas0");
  var ctx=c.getContext("2d");
  ctx.clearRect((s.width/2)- ((s.windowWidth/3.2)/2),0,  s.windowWidth/3.2 ,s.windowHeight);
}

window.onresize =  function() {
  s.windowWidth = window.innerWidth ;
  s.windowHeight = s.windowWidth * .562
  s.resizeCanvas(s.windowWidth, s.windowHeight);
} 

}
module.exports= stars;




