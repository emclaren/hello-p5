const windowWidth = window.innerWidth;


//test sketch 1
var sketch = function(p){
	p.xpos=100;
	p.ypos=100;

	p.setup = function(){
		width= screen.width;
		this._pixelDensity = 1;
		var canvas = p.createCanvas(windowWidth, windowWidth/1.85); //make this mobile friendly
		canvas.parent('video-overlay');
		p.fill(0,133,255);
	}

	p.draw = function(){
		p.strokeWeight(5);
		p.stroke(255,255,255);
		p.ellipse(p.xpos, p.ypos, 100, 100);
		p.textSize(32);
	}
	
}



