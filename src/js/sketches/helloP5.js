
var helloP5= function(s){
	s.setup = function(){
		s.pixelDensity(1);
		s.windowWidth = window.innerWidth ;
		s.windowHeight = s.windowWidth * .5504;
		s.canvas= s.createCanvas(s.windowWidth, s.windowHeight);
		s.canvas.parent('video-overlay');
	}

	s.draw = function(){
		s.fill('hotpink')
		s.textSize(32);
		 if(window.videoCurrentTimeGlobal<145.0){
		s.text("special thanks to...", 100, s.windowHeight/2);
		s.text("List Names", 200, s.windowHeight/2);
		s.text("List Names", 250, s.windowHeight/2);
		s.text("List Names", 300, s.windowHeight/2);
		s.text("List Names", 400, s.windowHeight/2);
}
		   if(window.videoCurrentTimeGlobal>145.0 &&window.videoCurrentTimeGlobal<149.0){
		s.text("to view the examples Click Here", 100, s.windowHeight/2);
   }


   		   if(window.videoCurrentTimeGlobal>149.0){
		s.text("This project was completed as part of GSOC", 100, s.windowHeight/2);
   }
	}




}

module.exports= helloP5;




// var helloP5= function(s){
// 	s.mapped;


// 	s.setup = function(){
// 		s.pixelDensity(1);
// 		s.windowWidth = window.innerWidth ;
// 		s.windowHeight = s.windowWidth * .5504;
// 		s.canvas= s.createCanvas(s.windowWidth, s.windowHeight);
// 		s.canvas.parent('video-overlay');
// 	}

// 	s.draw = function(){
		
// 		// s.mapped = s.map(s.Math.abs(s.mouseX),0,s.width,-7,7);

// 		// if(s.mouseIsPressed){
// 		// 	s.mapped+=5;
// 		// }

// 		// s.background(240);

// 		// s.push();
// 		// s.blendMode(s.MULTIPLY);

// 		// s.textAlign(s.CENTER, s.CENTER);
// 		// s.textSize(s.height/5);
// 		// s.textStyle(s.BOLD);

//   // // cyan
//   // s.fill(0,255,255);
//   // s.text('p5*js', s.width/2+s.mapped, s.height/2);

//   // // magenta
//   // s.fill(255,0,255);
//   // s.text('p5*js', s.width/2, s.height/2);

//   // //yellow
//   // s.fill(255, 255, 0);
//   // s.text('p5*js', s.width/2-s.mapped, s.height/2 );

//   // s.pop();
// }




// s.resize =  function() {
// 	s.windowWidth = window.innerWidth ;
// 	s.windowHeight = s.windowWidth * .5504
// 	s.resizeCanvas(s.windowWidth, s.windowWidth * .5504);
// 	console.log(s.windowWidth)

// } 

// window.onresize = s.resize;

// }

// module.exports= helloP5;







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









