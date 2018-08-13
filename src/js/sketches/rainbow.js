

// var rainbow = function(s){
// s.change=0;
	
// 	s.setup = function(){
// 		s.pixelDensity(1);
// 		s.windowWidth = window.innerWidth/2.9 ;
// 		s.windowHeight = window.innerWidth * .5400

// 		s.canvas= s.createCanvas(s.windowWidth, s.windowHeight);
// 		s.canvas.parent('video-overlay');
// 		s.background(0,0,0);
// 		// s.frameRate(30);

// 	}

// 	s.draw = function(){
// s.change=s.change+.5;
// // console.log("rainbowsketch")
// 		s.noStroke();
// 		s.fill('red');
// 		s.colors = ['rgba(0,255,0, 0.25)', 'rgba(255,255,0, 0.25)', 'rgba(0,255,255, 0.25)']
// 		s.offset = 30;
// 		s.numCurves = s.change;
// 		s.index = 0;
// 		for (s.i = 0; s.i < s.numCurves; s.i++) {
// 		// x ranges width of canvas
// 		s.index = s.index % s.colors.length;
// 		if (s.index == s.colors.length) {
// 			s.index = 0;
// 		}

// 		s.fill(s.colors[s.index]);
// 		for (s.x = s.width; s.x > 0; s.x--) {
// 			// scaled so fewer and higher curves on screen
// 			s.y = s.sin(s.x / 100) * -100;
// 			s.ellipse(s.x, s.y + 100 + s.offset * s.i, s.offset);
// 		}
// 		s.index++;
// 	}
// }


// 	s.resize =  function() {
// 	   	s.windowWidth = window.innerWidth ;
// 		s.windowHeight = s.windowWidth * .5504
//     s.resizeCanvas(s.windowWidth, s.windowWidth * .5504);
//     console.log(s.windowWidth)

// } 

// window.onresize = s.resize;

// }

// module.exports= rainbow;



var rainbow = function(s){
// s.change=0;
	
	s.setup = function(){
		s.windowWidth = window.innerWidth ;
		s.windowHeight = s.windowWidth  * .562
		this._pixelDensity = 1;

		s.canvas = s.createCanvas(s.windowWidth, s.windowHeight); //make this mobile friendly
		s.canvas.parent('video-overlay');
		s.background("white");

	}

	s.draw = function(){
		s.noStroke();
		s.fill('red');
		s.colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
		s.offset = 30;
		s.numCurves = 14;
		s.index = 0;
		for (s.i = 0; s.i < s.numCurves; s.i++) {
		// x ranges width of canvas
		s.index = s.index % s.colors.length;
		if (s.index == s.colors.length) {
			s.index = 0;
		}

		s.fill(s.colors[s.index])
		for (s.x = 0; s.x < s.width; s.x++) {
			// scaled so fewer and higher curves on screen
			s.y = s.sin(s.x / 100) * -100;
			s.ellipse(s.x, s.y + 100 + s.offset * s.i, s.offset);
		}
		s.index++;
	}
	s.cutout();
}

s.cutout =function(){
  var c=document.getElementById("defaultCanvas0");
  var ctx=c.getContext("2d");
  ctx.clearRect((s.width/2)- ((s.windowWidth/3.2)/2),0,  s.windowWidth/3.2 ,s.windowHeight);
}

	s.resize =  function() {
	   	s.windowWidth = window.innerWidth ;
		s.windowHeight = s.windowWidth * .5504
    s.resizeCanvas(s.windowWidth, s.windowWidth * .5504);
    console.log(s.windowWidth)

} 

window.onresize = s.resize;

}

module.exports= rainbow;