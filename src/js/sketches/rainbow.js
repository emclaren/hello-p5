/*********************
// Rainbow
// Description: 
// Credit: https://www.openprocessing.org/sketch/565531 
*********************/


const rainbow = (p5) => {
	let offset; //thickness of rainbow lines
	let distanceFromTop; //start higher or lower
	let index=0; // to paint them line the apprirpiate color
	let colors; //array to store the colors in 
	let numCurves; //number rainbow Lines
	let ycoord; //y coordinate of each ellipse in the rainbow
	let cutoutSize;
	
	p5.setup  = () => {
		p5.pixelDensity(1);
		let windowWidth = document.documentElement.clientWidth;;
		let windowHeight = windowWidth  * 0.562;
		p5.canvas = p5.createCanvas(windowWidth, windowHeight);
		p5.canvas.parent('video-overlay');
		p5.noStroke();
		offset = p5.width/34;
		distanceFromTop = p5.height/4; 
		// Rainbow colors - RED, ORANGE, YELLOW, GREEN BLUE INDIGO VIOLET 
		colors = [[255,0,5],[255, 170, 0],[255, 255, 0],[30,237,58],[0, 100, 255],[153, 17, 170],[164, 66, 220]];
		numCurves = 7; //number of lines in the rainbow
		for (let i = 0; i < numCurves; i++) {
			// x ranges width of canvas
			index = index % colors.length;
			// reset to first color if there are more lines than colores;
			if (index == colors.length) {
				index = 0;
			}
			p5.fill(colors[index])
			for (let xcoord = 0; xcoord < p5.width; xcoord++) {
				let scale=p5.width/9.5; // scaled so fewer and higher curves on screen
				ycoord = p5.sin(xcoord / scale) * scale; // ycoordinate of elipses in a sin wave shape
				p5.ellipse(xcoord, ycoord  + distanceFromTop + offset * i, offset);	
			}
			index++;	
		}
			cutoutSize = p5.width/6.32;//this is to cut away part of the canvas
	};
	
	p5.draw = function(){
		if(window.videoCurrentTimeGlobal>54){
			cutoutSize+=10;		
		}
		p5.cutout();	
	};
	
	p5.cutout  = function() {
		var c = document.getElementById("defaultCanvas0");
		var ctx = c.getContext("2d");
		ctx.clearRect((p5.width / 2) - cutoutSize, 0, cutoutSize*2, p5.height);
	  };  
};

module.exports= rainbow;






