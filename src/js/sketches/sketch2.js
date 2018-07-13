

//canvas overlap sketch
var sketch2 = function(q){
	q.xpos=100;
	q.ypos=100;
	q.setup = function(){
		q.pixelDensity(1);
		q.canvas= q.createCanvas(windowWidth, windowWidth/1.755, 'webgl');
		q.canvas.id('newcanvas');
		q.canvas.parent('video-overlay');
		q.seriously, // the main object that holds the entire composition
		q.sourceImage, // a wrapper object for our source image
		q.target; // a wrapper object for our target canvas
		q.reformat;
		q.seriously = new Seriously();
		q.reformat = q.seriously.transform('reformat');


		q.sourceImage = q.seriously.source('#player');// Create a source object by passing a CSS query string.
		q.target = q.seriously.target('#newcanvas');// now do the same for the target canvas

		
		q.target.source = q.sourceImage;// connect any node as the source of the target. we only have one.
		q.target.width= window.innerWidth * .92;
		q.target.height=window.innerWidth /2;


		//set up reformat parameters
		q.reformat.width = q.target.width;
		q.reformat.height = q.target.height;
		q.reformat.mode = "cover";

			// connect all our nodes in the right order
			q.reformat.source = '#player';
			q.chroma = q.seriously.effect('chroma');
			q.chroma.source =  q.reformat;
			q.target.source = q.chroma;

			q.r = 76/255;
			q.g = 249/255;
			q.b = 43/255;
			q.chroma.screen = [q.r,q.g,q.b,1];

			q.seriously.go();
		}



		q.draw = function(){

		}

//   q.resize= function() {

//     q.target.width = window.innerWidth ;
//     q.target.height = window.innerWidth  /2; 
//     // reformat.width = target.width;
//     // reformat.height = target.height;
//     console.log("I resized");
//   } 

//  window.onresize = q.resize;
// }



// q.devicePixelRatio = window.devicePixelRatio || 1;

q.resize =  function() {
	q.resizeCanvas(windowWidth, windowWidth/1.755, 'webgl');
	q.target.width= window.innerWidth * .92;
	q.target.height=window.innerWidth /2;
	//set up reformat parameters
	q.reformat.width = q.target.width;
	q.reformat.height = q.target.height;
	q.reformat.mode = "cover";

} 

window.onresize = q.resize;

}
