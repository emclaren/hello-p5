

/*********************
// Heart Animation
// Description: Draws randomly coloured hearts on screen 
// Credit: waiting for release
// Link: https://www.openprocessing.org/sketch/559382
*********************/


const stars = (s) => {

  let stars = [];
  let starsNum = 800;
  let starsNum2 = 0;
  let toggle = false;
  let mouseControl;
  let cutoutSize;
  let starColor;
let variableSpeed;

  s.setup  = () => {
    s.pixelDensity(1);
    let windowWidth = window.innerWidth ;
    let windowHeight = windowWidth  * 0.562;
    s.canvas = s.createCanvas(windowWidth, windowHeight);
    s.canvas.parent('video-overlay');
    s.noStroke();
    for (let i = 0; i < starsNum; i++) {
      if (i < starsNum / 3) {
        starColor = "yellow";
      } else if (i < starsNum * 2 / 3) {
        starColor = "magenta";
      } else {
        starColor = "cyan";
      }
      stars.push(new s.Star(starColor));
    }

  }



  s.draw  = () => {
   s.blendMode(s.BLEND);
   s.clear();
   s.blendMode(s.ADD);
   let mousedistance = s.dist(s.mouseX, s.mouseY, s.width/2, s.height/2);
   let mouseControl = s.map(mousedistance, 0, s.width/2, 200, 0)
   variableSpeed = s.map(mousedistance,  0, s.width/2, 1.5, 0)
   for (let i = 0; i < starsNum2; i++) {
    stars[i].display();
  }

  if(window.videoCurrentTimeGlobal < 46){
    if(starsNum2 < starsNum - 200){
      starsNum2+=10
    }
  }


  if(window.videoCurrentTimeGlobal > 44){
    if(starsNum2 > 20){
      starsNum2 -= 20
    }
  }

  cutoutSize = s.width/6.4
  s.cutout();

}

s.Star = function(tmpColorName) {
  this.R = s.width/6;
  this.x = this.R * s.randomGaussian();
  this.y = this.R * s.randomGaussian();
  this.r = s.random(s.width/250, s.width/40) * 5;
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
    case "yellow":
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
    s.translate(s.width / 2, s.height / 2);
    s.rotate(s.radians(this.theta));
    if(window.videoCurrentTimeGlobal > 46.25){
      this.x += 5;
      this.r--;
      this.speed = 0;
    }
    s.ellipse(this.x, this.y, this.r, this.r);
    s.pop();
    this.theta += this.speed + variableSpeed;
  }
}

s.cutout  = function() {
  var c = document.getElementById("defaultCanvas0");
  var ctx = c.getContext("2d");
  ctx.clearRect((s.width / 2) - cutoutSize, 0, cutoutSize*2, s.height);
}

}
module.exports= stars;




