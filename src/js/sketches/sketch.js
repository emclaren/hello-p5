 
function(p){
	let windowWidth2 = window.innerWidth;
	p.xpos=100;
	p.ypos=100;
	p.setup = function(){
		this._pixelDensity = 1;
		background(200,200,200);
		var canvas = p.createCanvas(500, 500/1.85); //make this mobile friendly
		canvas.parent('video-overlay');
		p.fill(0,133,255);
			console.log("setup")
	}

	p.draw = function(){
		p.strokeWeight(5);
		p.stroke(255,255,255);
		p.ellipse(p.xpos, p.ypos, 100, 100);
		p.textSize(32);
		console.log("drawing")
	}
	
}

