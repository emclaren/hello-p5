/*********************
// Hello P5 Title Sketch
// Credit: waiting for release
*********************/
var heart = (s) => {
  let R = 8; 
  let maxVal = 0;
  let rt = 0;
  let alp = 0;
  let stAlp = 255;
  let fillCount = 0;
  let phase = 0;
  let oy = 0;
  let c = s.random(360);
  let size;
  let xpos;
  let ypos;
  let sizeChange; 
  let x;
  let y;

   s.setup  = () => {
    s.pixelDensity(1);
    let windowWidth = window.innerWidth ;
    let windowHeight = windowWidth  * 0.562;
    s.canvas = s.createCanvas(windowWidth, windowHeight);
    s.canvas.parent('video-overlay');
    s.colorMode(s.HSB, 360, 100, 100, 255); //use Hue-Saturation-Brightness Color Model
    s.strokeJoin(s.ROUND);
    s.strokeWeight(5);
    xpos=s.width / 5;
    ypos=s.height / 3 + oy;
  };

  s.draw = () => {
    s.clear();
    size=s.width / 1280;
 
    sizeChange = s.map(s.mouseX, 0, s.width, 0.5, 1);  
    s.fill(c, 80, 100, alp);
    s.stroke(c, 80, 100, stAlp);
    s.push();
    s.translate(xpos, ypos);
    s.beginShape();
    for (s.theta = 0; s.theta < maxVal; s.theta++) {
      x = R * (16 * s.sin(s.radians(s.theta)) * s.sin(s.radians(s.theta)) * s.sin(s.radians(s.theta)));
      y = (-1) * R * (13 * s.cos(s.radians(s.theta)) - 5 * s.cos(s.radians(2 * s.theta)) -
        2 * s.cos(s.radians(3 * s.theta)) - s.cos(s.radians(4 * s.theta)));
      s.vertex(x, y);
    }
    s.scale(size * sizeChange); 
    s.endShape();
    s.pop();

    if (phase == 0) {
      maxVal += 5;
      if (maxVal > 360) {
        maxVal = 360;
        phase = 1;
      }
    }

    if (phase == 1) {
      R = 8 + s.abs(s.sin(s.radians(rt)));
      rt += 20;
      if (rt > 360) {
        rt = 360;
        phase = 2;
      }
    }

    if (phase == 2) {
      alp += 5;
      fillCount += 5;
      if (alp > 255) {
        alp = 255;
      }
      console.log(fillCount)
      if (fillCount > 400) {
        phase = 3;
      }
    }

    if (phase == 3) {
      oy -= 10;
      alp -= 15;
      stAlp -= 15;
      console.log("phase3")
      if (oy < -s.height) {
        maxVal = 0;
        rt = 0;
        alp = 0;
        stAlp = 255;
        phase = 0;
        oy = 0;
        fillCount = 0;
        c = s.random(360);
        xpos = s.width - s.width/6;
        ypos = s.height - s.height / 3 + oy;
      }
    }
  };

};

module.exports= heart;




