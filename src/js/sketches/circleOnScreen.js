// option 1 - pulse
 
var circleOnScreen = function(p) {
	p.setup = function(){
console.log()
		p.windowWidth = window.innerWidth ;
		p.windowHeight = p.windowWidth * .5504
		p.canvas= p.createCanvas(p.windowWidth, p.windowHeight);
		p._pixelDensity = 1;
		p.canvas.parent('video-overlay');
		p.fill(237,34,93);
		p.x=1;
		p.grow=0
		console.log(p.windowWidth)

	}

	p.draw = function(){
		p.clear();
		p.strokeWeight(4);
		p.stroke(255,255,255);
		p.frameRate(30)
		p.ellipse(p.windowWidth*.25, p.windowHeight*.4, p.windowWidth*.15+p.grow, p.windowWidth*.15+p.grow);
		p.grow= p.grow+p.x
		if(p.grow > 3 || p.grow < -3){
			p.x = p.x* -1;
		}
	}

   p.windowResized= function windowResized() {
  //  	p.windowWidth = window.innerWidth ;
		// p.windowHeight = p.windowWidth * .5504
    p.resizeCanvas(p.windowWidth, p.windowWidth * .5504);
    console.log(p.windowWidth)
}
}

module.exports= circleOnScreen;








// option 2 - fade





// var circleOnScreen = function(p) {
// 	p.setup = function(){
// 		p.windowWidth = window.innerWidth ;
// 		p.windowHeight = p.windowWidth * .5504
// 		p.canvas= p.createCanvas(p.windowWidth, p.windowHeight);
// 		p.canvas.parent('video-overlay');
// 		p.fill(237,34,93);
// 		p.x=1;
// 		p.fade=0
// 	}

// 	p.draw = function(){
// 		p.fill(237+p.fade,34+p.fade,93+p.fade);
// 		console.log(p.fade);

// 		p.clear();
// 		p.strokeWeight(4);
// 		p.stroke(255,255,255);
// 		p.frameRate(30);
// 		p.ellipse(p.windowWidth*.25, p.windowHeight*.4, p.windowWidth*.15, p.windowWidth*.15);
// 		p.fade= p.fade+p.x
// 		if(p.fade > 30 || p.fade < -30){
// 			p.x = p.x* -1;
// 		}
// 	}

//    p.windowResized= function windowResized() {
//     p.resizeCanvas(p.windowWidth, p.windowWidth * .5504);
// }
// }

// module.exports= circleOnScreen;

