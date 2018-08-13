var sakuraNum = 300;

var fubuki = [];

var colors = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (var i = 0; i < sakuraNum; i++) {
    fubuki.push(new Sakura());
  }

  noStroke();

  colors.push(color(244, 191, 252, 150));
  colors.push(color(255, 219, 248, 150));
  colors.push(color(246, 204, 252, 150));
}

function draw() {
  background(360);

  for (var i = 0; i < sakuraNum; i++) {
    fubuki[i].draw();
    fubuki[i].move();
  }
}

function Sakura() {
  var n = 4;
  var A, md, r, x, y;

  this.xDef = random(width);
  
  this.xAmp = random(50,100);
  this.xSpeed = random(1,2);
  this.xTheta = random(360);
  
  this.ox = this.xDef + this.xAmp * sin(radians(this.xTheta));
  this.oy = random(height);
  this.rotateT = random(360);
  this.size = random(20, 50);

  this.ySpeed = this.size / 20;
  this.sizeYScale = 1;
  this.sizeYT = random(360);
  this.sizeYSpeed = this.size / 30;
  this.c = floor(random(3));

  this.draw = function() {
    fill(colors[this.c]);

    push();
    translate(this.ox, this.oy);
    rotate(radians(this.rotateT));
    beginShape();
    for (var t = 0; t < 360 / 4; t++) {
      A = n / PI * radians(t);

      md = floor(A) % 2;

      r = pow(-1, md) * (A - floor(A)) + md;

      R = r + 2 * calcH(r);

      x = this.size * R * cos(radians(t));
      y = this.size * this.sizeYScale * R * sin(radians(t));

      vertex(x, y);
    }
    endShape(CLOSE);
    pop();
  };

  this.move = function() {
    this.ox = this.xDef + this.xAmp * sin(radians(this.xTheta));
    this.xTheta += this.xSpeed;
    
    this.oy += this.ySpeed;
    this.sizeYT += this.sizeYSpeed;
    this.sizeYScale = abs(sin(radians(this.sizeYT)));

    if (this.oy > height + this.size) {
      this.oy = -this.size;
    }
  };
}

function calcH(x) {
  if (x < 0.8) {
    return 0;
  } else {
    return 0.8 - x;
  }
}