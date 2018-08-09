

var fez= function(s){
  s.interval;
  s.grid = 40;
  s.posX;
  s.posY;
  s.w = 15;
  s.h = 15;
  s.colors = {
    1: '#ffffff',
    2: '#e3ecda',
    3: '#b9c7a5',
    4: '#db0006',
    5: '#a70007',
    6: '#feb325',
    7: '#01000a',
    8: '#000000',
    9: '#e27b68'
  };
  s.pixelArt = [
  0,0,0,6,4,4,0,0,0,0,0,0,0,
  0,0,6,5,4,4,0,0,0,0,0,0,0,
  0,0,0,5,4,4,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,0,0,0,0,0,
  0,3,2,1,1,1,1,1,1,1,1,1,0,
  3,2,2,1,1,1,1,1,1,1,1,1,1,
  3,2,1,7,1,1,1,1,1,1,1,7,1,
  3,2,1,1,1,1,8,8,8,8,1,1,1,
  3,2,1,1,1,1,9,9,8,8,1,1,1,
  3,2,2,1,1,1,1,1,8,1,1,1,1,
  0,3,3,2,1,1,1,1,1,1,1,1,0,
  0,0,0,0,3,3,2,1,2,0,0,0,0,
  0,3,1,1,2,1,1,1,1,3,3,0,0,
  0,0,3,1,1,1,1,1,1,3,0,0,0,
  0,0,0,3,1,1,1,1,1,0,0,0,0,
  0,0,0,3,2,1,1,1,1,0,0,0,0,
  0,0,0,3,2,1,1,1,1,0,0,0,0,
  0,0,0,3,2,3,3,2,3,0,0,0,0,
  0,0,3,2,0,0,2,3,0,0,0,0,0];


  s.setInterval=function(){
    console.log(s.grid);
    if(s.grid > 13) {
      s.grid--;
    } else {
      s.stopInterval();
    }
  }


  s.stopInterval = function(){
   s.clearInterval(s.interval);
 }

 s.setup = function(){
  // s.pixelDensity(1);
  console.log("fez setup")
  // s.windowWidth = window.innerWidth ;
  // s.windowHeight = s.windowWidth * .5504
  s.canvas= s.createCanvas(450,330);
  s.canvas.parent('video-overlay');
  s.strokeWeight(0);
  
  s.interval = function(t, p){
   t= s.setInterval()
   p=10;
 };


}


 s.draw = function(){
  console.log("fez draw")
  s.background('#67cdfd');
  
  s.posX = 50;
  s.posY = 0;

  for (  s.i=0; s.i <= s.pixelArt.length; s.i++ ) {

    s.posX = s.posX + s.w;

    if( s.i % s.grid === 0 ) {
      s.posX = 50;
      s.posY = s.posY + s.h;
    }

    if( s.pixelArt[s.i] > 0 ){
      s.fill(s.colors[s.pixelArt[s.i]] );
      s.rect(s.posX, s.posY, s.w, s.h);
    }
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

module.exports= fez;








// var interval;
// var grid = 40;
// var posX;
// var posY;
// var w = 15;
// var h = 15;
// var colors = {
//     1: '#ffffff',
//     2: '#e3ecda',
//     3: '#b9c7a5',
//     4: '#db0006',
//     5: '#a70007',
//     6: '#feb325',
//     7: '#01000a',
//     8: '#000000',
//     9: '#e27b68'
//   };
// var pixelArt = [
// 0,0,0,6,4,4,0,0,0,0,0,0,0,
// 0,0,6,5,4,4,0,0,0,0,0,0,0,
// 0,0,0,5,4,4,0,0,0,0,0,0,0,
// 0,0,0,0,0,0,0,0,0,0,0,0,0,
// 0,3,2,1,1,1,1,1,1,1,1,1,0,
// 3,2,2,1,1,1,1,1,1,1,1,1,1,
// 3,2,1,7,1,1,1,1,1,1,1,7,1,
// 3,2,1,1,1,1,8,8,8,8,1,1,1,
// 3,2,1,1,1,1,9,9,8,8,1,1,1,
// 3,2,2,1,1,1,1,1,8,1,1,1,1,
// 0,3,3,2,1,1,1,1,1,1,1,1,0,
// 0,0,0,0,3,3,2,1,2,0,0,0,0,
// 0,3,1,1,2,1,1,1,1,3,3,0,0,
// 0,0,3,1,1,1,1,1,1,3,0,0,0,
// 0,0,0,3,1,1,1,1,1,0,0,0,0,
// 0,0,0,3,2,1,1,1,1,0,0,0,0,
// 0,0,0,3,2,1,1,1,1,0,0,0,0,
// 0,0,0,3,2,3,3,2,3,0,0,0,0,
// 0,0,3,2,0,0,2,3,0,0,0,0,0];

// function setup() {
//   createCanvas(450,330);
//   strokeWeight(0);
  
//   interval = setInterval(function(){
//     console.log(grid);
//     if(grid > 13) {
//       grid--;
//     } else {
//       stopInterval();
//     }
//   }, 10);
// }

// function stopInterval() {
//     clearInterval(interval);
// }

// function draw() {

//   background('#67cdfd');
  
//   posX = 50;
//   posY = 0;

//   for ( var i=0; i <= pixelArt.length; i++ ) {
      
//       posX = posX + w;
      
//       if( i % grid === 0 ) {
//         posX = 50;
//         posY = posY + h;
//       }
      
//       if( pixelArt[i] > 0 ){
//         fill( colors[pixelArt[i]] );
//         rect(posX, posY, w, h);
//       }
//   }
// }





