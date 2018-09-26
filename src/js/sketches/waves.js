/*********************
// Waves
// Description: Draws interactive waves on the screen
// Credit: 
*********************/


const waves = (s) => {

  let waves = [];
  let waveNumber = 0;
  let changeSize = 0;



  s.setup  = () => {
    s.pixelDensity(1);
    let windowWidth = window.innerWidth ;
    let windowHeight = windowWidth  * 0.562;
    s.canvas = s.createCanvas(windowWidth, windowHeight);
    s.canvas.parent('video-overlay');
    s.colorMode(s.HSB,360,100,100,100);
    for(let i = 0; i < 35; i++){
      waves.push(new s.Wave());
    }
    s.noStroke();
    s.background(255,0,122);
  };



  s.draw = () => {
    s.clear();
    let size = s.dist(s.mouseX, s.mouseY, s.width/2, s.height/2); //measure distance of the ouse fromthe center of the pge
    waveNumber = s.map(size, 0, s.width/2, 0, 30);
    for(let i = 0; i < waveNumber; i++){
      waves[i].display();
    }

    s.cutout();
    if(window.videoCurrentTimeGlobal > 119.75){
      changeSize = changeSize + 4;

    }
  };


  s.Wave = function(){
    this.yoffA = s.random(10);
    this.yoffB = this.yoffA;
    this.yRandom = s.random(-100,100);
    this.c = s.random(360);
    this.display = function(){
    this.xoffA = 0;     
    this.xoffB = 0;

    s.fill(this.c ,80,100,50);
    s.beginShape(); 

    for (let xA = 0; xA <= s.width; xA += 10) {
      let yA = s.map(s.noise(this.xoffA, this.yoffA), 0, 1, 0,s.height) + this.yRandom;
      s.vertex(xA, yA); 
      this.xoffA += 0.05;
    }
    
    for (let xB = s.width; xB >= 0; xB -= 10) {
      let yB = s.map(s.noise(this.xoffB, this.yoffB), 0, 1, 0,s.height) + this.yRandom;
      s.vertex(xB, yB); 
      this.xoffB += 0.05;
    }

    this.yoffA += 0.01;
    this.yoffB += 0.01;
    s.endShape(s.CLOSE);
  };

};


s.cutout =function(){
  var c = document.getElementById("defaultCanvas0");
  var ctx = c.getContext("2d");
  ctx.clearRect((s.width/2-changeSize) - ((s.width/1.65)/2), 0, (s.width/1.65)+ changeSize*2 , s.height);
};

};

module.exports = waves;





















