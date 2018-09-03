// function setup() {
// 	createCanvas(800, 600);
// 	background('white');

	
// }


// function draw() {
	
// j= map(mouseX, 0, width, 0, 50);
// 	console.log(j)
// 	fill('skyblue'); stroke(0); rect(0, 0, 799, 599);
	
// 	noStroke();
// 	fill('red');
// 	let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
// 	let offset = 30;
// 	let numCurves = 14;
// 	let index = 0;
// 	for (let i = 0; i < numCurves; i++) {
// 		// x ranges width of canvas
// 		index = index % colors.length;
// 		if (index == colors.length) {
// 			index =0;
// 		}
		
// 		fill(colors[index])
// 		for (let x = 0; x < width; x++) {
// 			// scaled so fewer and higher curves on screen
// 			let y = sin(x / 100) * -100;
// 			ellipse(x*j, y + 100 + offset * i, offset)
			
// 		}
// 		// y++;
// 		index++;
// 	}
// }

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
s.j=100;
s.k=100;
		s.k2=100;
		s.j2=100;
	s.setup = function(){
		s.windowWidth = window.innerWidth ;
		s.windowHeight = s.windowWidth  * .562 
		this._pixelDensity = 1;

		s.canvas = s.createCanvas(s.windowWidth, s.windowHeight); //make this mobile friendly
		s.canvas.parent('video-overlay');
		// s.background("white");

	}

	s.draw = function(){
	s.j= s.map(s.mouseX, 0, s.windowWidth, 1, 50);
	s.k= s.map(s.mouseY, 0, s.windowHeight, 1, 100);
		s.noStroke();
		s.clear();
		s.fill('red');
		s.colors = ['rgba(255,0,0,.9)', 'rgba(245,220,40, .9)', 'rgba(255,255,0,.9)', 'rgba(0,255,0,.9)', 'rgba(0,0,255,.9)', 'rgba(75,0,130,.9)', 'rgba(164, 66, 220, .9)']
		s.offset = s.windowWidth/34;
		s.numCurves = 10;
		s.index = 0;
		s.distanceFromTop = s.windowWidth /7;
		s.yMobileValue = s.windowWidth/10.24;
		for (s.i = 0; s.i < s.numCurves; s.i++) {
		// x ranges width of canvas
		s.index = s.index % s.colors.length;
		if (s.index == s.colors.length) {
			s.index = 0;
		}

		s.fill(s.colors[s.index])
		for (s.x = 0; s.x < s.windowWidth; s.x++) {
			// scaled so fewer and higher curves on screen
			s.y = s.sin(s.x / (s.k+s.k2)) * -s.yMobileValue;
			s.ellipse(s.x*(s.j2), s.y + s.distanceFromTop + s.offset * s.i, s.offset);
		}
		s.index++;
		if(s.k2>11){
	
		s.k2=s.k2-.15;
	}
		if(s.j2>5){
	
		s.j2=s.j2-.15;
	}

	// if(s.mouseX != s.pmouseX){
	// s.j2= s.map(s.mouseX, 0, s.windowWidth, 1, 50);
	// s.k2= s.map(s.mouseY, 0, s.windowHeight, 1, 100);

	// }
	}
	s.cutout();
}

s.cutout =function(){
  var c=document.getElementById("defaultCanvas0");
  var ctx=c.getContext("2d");
  ctx.clearRect((s.width/2)-((s.windowWidth/3.1655)/2),0,  s.windowWidth/3.1655 ,s.windowHeight);
}


}

module.exports= rainbow;