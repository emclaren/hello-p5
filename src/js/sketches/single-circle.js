/*********************
// Single Circle
// Description: Pulsing Circle & Example Code Block
*********************/

var singleCircle = function(s) {
	let fadeIn = 0;
	let pulseSpeed = 0.5;
	let sizeChange = 0;
	let xcoord;
	let ycoord;
	let xdiameter;
	let ydiameter;
	let languageText;

	s.setup  = () => {
		// Create p5 canvas
		s.pixelDensity(1);
		let windowWidth = window.innerWidth ;
		let windowHeight = windowWidth  * 0.562;
		s.canvas = s.createCanvas(windowWidth, windowHeight);
		s.canvas.parent('video-overlay');		

		// Change visible text based on language chosen
		if( window.videoLanguage == "es"){
			languageText = "haga clic aquí";
		}else if( window.videoLanguage == "fr"){
			languageText = "Voir ici";
		}else{
			languageText = "Click here to try it";
		}

		//Create example html code block, styling can be found in canvas.scss
		s.div = s.createDiv('<code>function setup() \{ <ul><li>createCanvas(400, 400);</li><li>strokeWeight(4);</li><li> stroke(255,255,255); </li><li>   fill(237,34,93);</li></ul>} </br> function draw(){<ul><li>  ellipse(200, 200, 100, 100);</li></ul>}<br> <a href="https://editor.p5js.org/emclaren/sketches/SkO-FKawQ" target="_blank">' + languageText +'</a></code>');
		s.div.parent('video-overlay');
		s.div.addClass('p5-single-circle-code-example');	
	};

	s.draw = () => {
		//Clear the p5 canvas each frame
		s.clear();

		//Create pulsing circle 
		s.fill(237,34,93, fadeIn);
		s.stroke(255,255,255, fadeIn);
		s.strokeWeight(4); 
		xcoord = s.width * 0.25;
		ycoord = s.height * 0.3;
		xdiameter = s.width * 0.15 + sizeChange;
		ydiameter = s.width * 0.15 + sizeChange;
		s.ellipse(xcoord, ycoord, xdiameter, ydiameter); 
		sizeChange += pulseSpeed;

		//Reverse direction of pulse once it reaches limit
		if(sizeChange > 3 || sizeChange < -3){
			pulseSpeed  *=  -1;
		}

		//Fade in circle when plyr video reaches 57 seconds.
		if(window.videoCurrentTimeGlobal  >57){
			if(fadeIn < 255){
				fadeIn += 15;
			}
		}
	};
};

module.exports = singleCircle;

