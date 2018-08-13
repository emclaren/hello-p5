
var waves= function(s){

s.waves = [];

  s.setup = function(){
    s.pixelDensity(1);
    s.windowWidth = window.innerWidth ;
    s.windowHeight = window.innerWidth * .545
    s.canvas= s.createCanvas(s.windowWidth, s.windowHeight);
    s.canvas.parent('video-overlay');
    s.colorMode(s.HSB,360,100,100,100);
    // s.frameRate(30);
   
  for(s.i = 0; s.i < 30; s.i++){
    s.waves.push(new s.Wave());
  }
    s.noStroke();
 s.background(255,0,122);
  }


  s.draw = function(){
  // s.background(0);
  s.clear();
  

  
  for(s.i = 0; s.i < s.waves.length; s.i++){
    s.waves[s.i].display();
  }


s.cutout();
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
  // hole();

}


s.cutout =function(){
    var c=document.getElementById("defaultCanvas0");
    var ctx=c.getContext("2d");
    ctx.clearRect((s.width/2)- ((s.windowWidth/3.2)/2),0,  s.windowWidth/3.2 ,s.windowHeight);
}
window.onresize =  function() {
      s.windowWidth = window.innerWidth ;
    s.windowHeight = s.windowWidth * .5504
    s.resizeCanvas(s.windowWidth, s.windowWidth * .5504);
} 



}

module.exports= waves;








// Circle hole

// s.hole =function(){
//   // var x;
//     console.log("hole is running");
//     var c=document.getElementById("defaultCanvas0");
//     var ctx=c.getContext("2d");



// //     // test part

// //     ctx.beginPath();
// // ctx.arc(s.windowWidth / 2, s.windowHeight / 2, s.windowWidth / 4, 0, 2 * 3.14);
// // ctx.stroke();
// // ctx.clip();

// // // clear the contents of the circle - erases the center of the cross
// // ctx.clearRect(0, 0, s.windowWidth,s.windowHeight);




//     ctx.clearRect((s.width/2)- ((s.windowWidth/3.2)/2),0,  s.windowWidth/3.2 ,s.windowHeight);
//   // x++
// }










