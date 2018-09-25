/*********************
// Rainbow
// Description: Draws randomly coloured hearts on screen 
// Credit: waiting for release
*********************/

const rainbow = (s) => {

	let cutshape=0;
	let offset;
	let distanceFromTop;
	let index=0;
	let colors;
	let numCurves;
	let y;

	s.setup  = () => {
		s.pixelDensity(1);
		let windowWidth = window.innerWidth ;
		let windowHeight = windowWidth  * 0.562;
		s.canvas = s.createCanvas(windowWidth, windowHeight);
		s.canvas.parent('video-overlay');
		
		
		offset = s.width/34;
		distanceFromTop = s.height/4;
		
		s.noStroke();
		
		colors = [[255,0,5],[255, 170, 0],[255, 255, 0],[30,237,58],[0, 100, 255],[153, 17, 170],[164, 66, 220]]
		
		
		numCurves = 7;
		for (i = 0; i < numCurves; i++) {
			// x ranges width of canvas
			index = index % colors.length;
			if (index == colors.length) {
				index = 0;
			}
			s.fill(colors[index])
			for (x = 0; x < s.width+5; x++) {
				// scaled so fewer and higher curves on screen
				y = s.sin(x / 100) * 100;
				s.ellipse(x, y  + distanceFromTop + offset * i, offset);	
			}
			index++;	
		}
	}
	
	s.draw = function(){
		if(window.videoCurrentTimeGlobal>54){
			cutshape+=10;		
		}
		
		s.cutout();
		
	}
	
	s.cutout =function(){
		var c=document.getElementById("defaultCanvas0");
		var ctx=c.getContext("2d");
		ctx.clearRect((s.width/2)-((s.width/3.166)/2)-cutshape,0,  s.width/3.166 +(cutshape*2), s.height);
	}
	
	
}

module.exports= rainbow;






