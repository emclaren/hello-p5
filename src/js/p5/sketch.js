var xpos;
var ypos ;

function setup() {
 pixelDensity(displayDensity());
 var canvas = createCanvas(windowWidth, windowWidth/1.85); //make this mobile friendly
 canvas.parent('video-overlay');
 xpos = windowWidth/1.3;
 ypos =  windowHeight/3;


}



function draw() {



	//First sketch, starts playing at 2 seconds
	if(sketch=="sketch1"){
		clear();
		strokeWeight(5);
		ellipseMode(RADIUS);
		fill(0,255,255);
		stroke(255,255,255);
		ellipse(xpos, ypos, 100, 100);

	}
	//Second sketch, starts playing at 5 seconds
	else if(sketch =="sketch2"){
		clear();
		strokeWeight(5);
		fill(255,0,0);
		//   ellipseMode(RADIUS);
		stroke(123,0,255);
		ellipse(xpos, ypos, 50, 60);
		xpos=xpos-2;
		
	}
else{
console.log("no sketch loaded yet");
}

}
function mousePressed() {
  clear();
}

function windowResized() {
	resizeCanvas(windowWidth, windowWidth/1.85);
}

