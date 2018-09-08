
var wave2= function(s){
s.growth=30
s.colorgradient=0;
s.testdifference=0
let t = 0;
s.colorbase=-500;
  s.setup = function(){
    s.pixelDensity(1);
    s.windowWidth = window.innerWidth ;
    s.windowHeight = s.windowWidth * .5504
    s.canvas= s.createCanvas(s.windowWidth, s.windowHeight);
    s.canvas.parent('video-overlay');
        s.noStroke();
  s.fill(238,34,90, 100);
 
  }





  s.draw = function(){
    console.log(s.colorbase)

s.clear();
  // make a x and y grid of ellipses
  for (let x = 0-s.testdifference; x <= s.width; x = x + s.growth) {
          let xAngle = s.map(s.mouseX, 0, s.width, -4 * s.PI, 4 * s.PI, true);
          let yAngle = s.map(s.mouseY, 0, s.height, -4 * s.PI, 4 * s.PI, true);
    // s.colorgradient = s.map(x, 0, s.width, -255, 255)
console.log("x "+x+"color "+s.colorgradient)

     // s.colorgradient2=s.Math.abs(s.colorgradient);
    for (let y = 0; y <= s.height; y = y + 30) {

      // starting point of each circle depends on mouse position
      s.fill(238,34,90, s.colorbase+s.colorgradient);

      // and also varies based on the particle's location
      let angle = xAngle * (x / s.width) + yAngle * (y / s.height);

      // each particle moves in a circle
      let myX = x + 20 * s.cos(2 * s.PI * t + angle);
      let myY = y + 20 * s.sin(2 * s.PI * t + angle);

      s.ellipse(myX, myY, 10, 10); // draw particle

    //       if(y==0){
    //     s.colorgradient=0
    //   }else if(y<s.height/2){
    // s.colorgradient=(s.colorgradient+1)
    //   }else if(x>s.height/2){
    // s.colorgradient=(s.colorgradient-1)  
    // }
s.colorgradient=s.dist(x,y, s.width/2, s.height/2)

  //      if(x==0){
  //       s.colorgradient=0
  //     }else if(x<s.width/2){
  //   s.colorgradient=(s.colorgradient+1)
  //     }else if(x>s.width/2){
  //   s.colorgradient=(s.colorgradient-1)  
  //   }
  // }
}
}
  t = t + 0.01; // update time
    if(window.videoCurrentTimeGlobal<37.5){
if(s.colorbase<-250){
  s.colorbase+=20;

}
}

else{
   s.colorbase-=50;
  s.growth++

}
// if(window.videoCurrentTimeGlobal>36){
     
//        // s.testdifference+=.5

// }


}



}

module.exports= wave2;


