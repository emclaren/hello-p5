//  zach, still not converted





var target= function(s){

s.i = 0;
s.colorZ = 245;

  s.setup = function(){
    s.pixelDensity(1);
    s.windowWidth = window.innerWidth ;
    s.windowHeight = s.windowWidth * .5504
    s.canvas= s.createCanvas(s.windowWidth, s.windowHeight);
    s.canvas.parent('video-overlay');
       s.frameRate(30);
 
  }





  s.draw = function(){
s.clear();
  // style attributes
  s.noFill();
  s.strokeWeight(3);
  s.stroke(s.random(255), s.random(255), s.random(255));
  s.ellipse(s.windowWidth/2,s.windowHeight/2,s.i+40,s.i+40);
  s.ellipse(s.windowWidth/2,s.windowHeight/2,s.i+20,s.i+20);
  // here she is
  s.ellipse(s.windowWidth/2,s.windowHeight/2,s.i,s.i);

  // space between circles
  s.i+=20;

  // if landscape, then wait until circles reach sides
  if(s.windowWidth>s.windowHeight){

    if( s.i >= s.windowWidth +100){
      // resetEffect();
    }

  // if portrait, then wait until circles reach top
  } else {

    if( s.i > s.windowHeight +100 ){
      // s.resetEffect();
    }

  }

}

  // s.resetEffect= function(){

  //   console.log('here we go again');

  //   // back to the beginning
  //   s.i = 10;

  //               var r1 = s.round(s.random(0,255));
  //               var g1 = s.round(s.random(0,255));
  //               var b1 = s.round(s.random(0,255));

  //               s.colorB = s.color(r1,g1,b1);
  //   console.log("background color: rgb(" + r1 + ", " + g1 + ", " + b1 + ")");

  //   // clears out canvas with solid color
  //   s.background(s.colorB);

  //   var r = s.round(s.random(0,255));
  //   var g = s.round(s.random(0,255));
  //   var b = s.round(s.random(0,255));

  //   s.colorZ = s.color(r,g,b);
  //   console.log("line color: rgb(" + r + ", " + g + ", " + b + ")");

  // }
}

module.exports= target;



// initial variables




// // Circle hole

// s.cutout=function(){
//   // var x;
//     console.log("hole is running");
//     var c=document.getElementById("defaultCanvas0");
//     var ctx=c.getContext("2d");



// //     // test part

//     ctx.beginPath();
// ctx.arc(s.windowWidth / 2, s.windowHeight / 2, s.windowWidth / 4, 0, 2 * 3.14);
// ctx.stroke();
// ctx.clip();

// // clear the contents of the circle - erases the center of the cross
// ctx.clearRect(0, 0, s.windowWidth,s.windowHeight);




//     // ctx.clearRect((s.width/2)- ((s.windowWidth/3.2)/2),0,  s.windowWidth/3.2 ,s.windowHeight);
//   // x++
// }
