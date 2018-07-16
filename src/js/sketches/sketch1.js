var sketch = function(p) {
	p.setup = function(){
		p.background(200,200,200);
		var canvas = p.createCanvas(500, 500/1.85); 
		canvas.parent('video-overlay');
		p.fill(0,133,255);
		console.log("setup")
	}

	p.draw = function(){
		p.strokeWeight(5);
		p.stroke(255,255,255);
		p.ellipse(200, 200, 100, 100);
		console.log("drawing")
	}
	
}

module.exports= sketch;