
// 

var heart= function(s){

s.R = 8; 
s.maxVal = 0;
s.rt = 0;
s.alp = 0;
s.stAlp = 255;
s.fillCount = 0;
s.phase = 0;
s.oy = 0;
s.c;



  s.setup = function(){
    s.pixelDensity(1);

    s.windowWidth = window.innerWidth ;
    s.windowHeight = s.windowWidth * .5504
    s.canvas= s.createCanvas(s.windowWidth, s.windowHeight);
    s.canvas.parent('video-overlay');
        s.colorMode(s.HSB, 360, 100, 100, 255);
  s.background(255,0,0);
  s.strokeJoin(s.ROUND);
    s.strokeWeight(5);
// s.frameRate(20);
  s.c = s.random(360);
  s.size=s.windowWidth/1280;
  // s.xpos=s.windowWidth/2
  // s.ypos=s.windowHeight / 2 + s.oy
    s.xpos=s.windowWidth/5;
      s.ypos=s.windowHeight / 3 +s.oy;
  }




s.draw = function(){


console.log("sxpos"+s.xpos);
  s.clear()  ;
  // s.background(255,0,0);
  s.fill(s.c, 80, 100, s.alp);
  s.stroke(s.c, 80, 100, s.stAlp);

  s.push();
  s.translate(s.xpos,s.ypos );
  s.beginShape();
  for (s.theta = 0; s.theta < s.maxVal; s.theta++) {
    s.x = s.R * (16 * s.sin(s.radians(s.theta)) * s.sin(s.radians(s.theta)) * s.sin(s.radians(s.theta)));
    s.y = (-1) * s.R * (13 * s.cos(s.radians(s.theta)) - 5 * s.cos(s.radians(2 * s.theta)) -
      2 * s.cos(s.radians(3 * s.theta)) - s.cos(s.radians(4 * s.theta)));

    s.vertex(s.x, s.y);
  }
   s.scale(s.size); 
  s.endShape();

  s.pop();

  if (s.phase == 0) {
    s.maxVal += 5;
    if (s.maxVal > 360) {
      s.maxVal = 360;
      s.phase = 1;
    }
  }

  if (s.phase == 1) {
    s.R = 8 + s.abs(s.sin(s.radians(s.rt)));
       console.log("phase 1")
    s.rt += 20;
    if (s.rt > 360) {
      s.rt = 360;
      s.phase = 2;
    }
  }

  if (s.phase == 2) {
       console.log("phase 2")
    s.alp += 5;
    s.fillCount += 5;
    if (s.alp > 255) {
      s.alp = 255;
    }
    if (s.fillCount > 400) {

      s.phase = 3
    }
  }

  if (s.phase == 3) {
    console.log("phase 3")
    s.oy -= 10;
    s.alp -= 15;
    s.stAlp -= 15;

    if (s.oy < -s.windowHeight) {
      s.maxVal = 0;
      s.rt = 0;
      s.alp = 0;
      s.stAlp = 255;

      s.phase = 0;
      s.oy = 0;
      s.fillCount = 0;
      s.c = s.random(360);
      // s.frameRate(0)
      s.xpos=s.windowWidth - s.windowWidth/6;
      s.ypos=s.windowHeight - s.windowHeight / 3 +s.oy;
    }
  
}
}








  s.resize =  function() {
    s.windowWidth = window.innerWidth ;
    s.windowHeight = s.windowWidth * .5504
    s.resizeCanvas(s.windowWidth, s.windowWidth * .5504);
    console.log(s.windowWidth)
    s.size=s.windowWidth/1280;

} 

window.onresize = s.resize;

}

module.exports= heart;





























