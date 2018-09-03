
var waves= function(s){

s.waves = [];
s.waveNumber=2
s.waveNumber2=0
s.changeSize=0
  s.setup = function(){
    s.pixelDensity(1);
    s.windowWidth = window.innerWidth ;
    s.windowHeight = window.innerWidth * .545
    s.canvas= s.createCanvas(s.windowWidth, s.windowHeight);
    s.canvas.parent('video-overlay');
    s.colorMode(s.HSB,360,100,100,100);
 
  for(s.i = 0; s.i < 35; s.i++){
    s.waves.push(new s.Wave());
  }
    s.noStroke();
 s.background(255,0,122);
  }


  s.draw = function(){
  s.clear();
  var size = s.dist(s.mouseX, s.mouseY, s.windowWidth/2, s.windowHeight/2);
 s.waveNumber2=s.map(size, 0, s.windowWidth/2, 0, 30)
  console.log(s.waveNumber2)
    // console.log(size)
  for(s.i = 0; s.i < s.waveNumber2; s.i++){
    s.waves[s.i].display();
  }

s.cutout();
if(window.videoCurrentTimeGlobal>119.75){
  s.changeSize=s.changeSize+4;

}
}


s.Wave = function(){
  this.yoffA = s.random(10);
  this.yoffB = this.yoffA;
  this.yRandom = s.random(-100,100);
  this.c = s.random(360);
  
  this.display = function(){
    // s.clear()
    this.xoffA = 0;     
    this.xoffB = 0;

    s.fill(this.c ,80,100,50);
    s.beginShape(); 
  
    for (s.xA = 0; s.xA <= s.windowwWidth; s.xA += 10) {
      s.yA = s.map(s.noise(this.xoffA, this.yoffA), 0, 1, 0,s.windowHeight) + this.yRandom;
      s.vertex(s.xA, s.yA); 
      this.xoffA += 0.05;
    }
    
    for (s.xB = s.windowWidth; s.xB >= 0; s.xB -= 10) {
      s.yB = s.map(s.noise(this.xoffB, this.yoffB), 0, 1, 0,s.windowHeight) + this.yRandom;
      s.vertex(s.xB, s.yB); 
      this.xoffB += 0.05;
    }
  
    this.yoffA += 0.01;
    this.yoffB += 0.01;
    s.endShape(s.CLOSE);
  }

}


s.cutout =function(){
    var c=document.getElementById("defaultCanvas0");
    var ctx=c.getContext("2d");
    ctx.clearRect((s.width/2-s.changeSize)- ((s.windowWidth/1.65)/2),0,  (s.windowWidth/1.65)+s.changeSize*2 ,s.windowHeight);
}




}

module.exports= waves;





















