/*********************
// Rainbow
// Description: Draws randomly coloured hearts on screen 
// Credit: waiting for release
*********************/

const rainbow = (s) => {

	
	let cutshape=0;// this is for the effect where the rainbows slide out to the side

	let offset; //thickness of rainbow lines
	let distanceFromTop; //start higher or lower
	let index=0; // to paint them line the apprirpiate color
	let colors; //array to store the colors in 
	let numCurves; //number rainbow Lines
	let ycoord; //y coordinate of the ellipse

	s.setup  = () => {
		s.pixelDensity(1);
		let windowWidth = window.innerWidth ;
		let windowHeight = windowWidth  * 0.562;
		s.canvas = s.createCanvas(windowWidth, windowHeight);
		s.canvas.parent('video-overlay');

	
		s.noStroke();
		offset = s.width/34;


		distanceFromTop = s.height/4; //good
	
		// Rainbow colors - RED, ORANGE, YELLOW GREEN BLUE PURPLE VIOLET (?)
		colors = [[255,0,5],[255, 170, 0],[255, 255, 0],[30,237,58],[0, 100, 255],[153, 17, 170],[164, 66, 220]]
		
		
		numCurves = 7; //number of lines in the rainbw

		for (i = 0; i < numCurves; i++) {
			// x ranges width of canvas
			index = index % colors.length;

			// reset to first color if there are more lines than colores;
			if (index == colors.length) {
				index = 0;
			}


			s.fill(colors[index])
			for (let xcoord = 0; xcoord < s.width; xcoord++) {
				let scale=s.width/9.5
				// scaled so fewer and higher curves on screen
				ycoord = s.sin(xcoord / scale) * scale;   //mobile looks pretty good around 20;
				s.ellipse(xcoord, ycoord  + distanceFromTop + offset * i, offset);	
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






