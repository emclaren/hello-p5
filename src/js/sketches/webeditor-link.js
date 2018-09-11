
/*********************
// Webeditor Link
// Description: Link to the Webeditor & Download pages
// Credit: 
*********************/


const webeditorLink = (s) => {
	let notdisplayed = true;
	let webeditorLinkDiv;
	let downloadLinkDiv;
	let opacity = 230;

	s.setup  = () => {
		s.pixelDensity(1);
		let windowWidth = window.innerWidth ;
		let windowHeight = windowWidth  * 0.562;
		s.canvas = s.createCanvas(windowWidth, windowHeight);
		s.canvas.parent('video-overlay');

		if( window.videoLanguage=="es"){
			webeditorLinkDiv=s.createDiv('<a href="https://editor.p5js.org/"  target="_blank"><div class="sketch-webeditor-link focused"> Editor web p5</div></a>');
		}else if( window.videoLanguage=="fr"){
			webeditorLinkDiv=s.createDiv('<a href="https://editor.p5js.org/"  target="_blank"><div class="sketch-webeditor-link focused">P5  web editor</div></a>');
		}else{
			webeditorLinkDiv=s.createDiv('<a href="https://editor.p5js.org/"  target="_blank"><div class="sketch-webeditor-link focused">P5 Web Editor</div></a>');
		}
		webeditorLinkDiv.parent('video-overlay');
	
	}


	s.draw  = () => {
		s.clear();
		if(window.videoCurrentTimeGlobal>100){
			if(notdisplayed){
				webeditorLinkDiv.removeClass('focused');
				if( window.videoLanguage=="es"){
					downloadLinkDiv = s.createDiv('<a href="http://p5js.org/download/"  target="_blank"><div class="sketch-download-link focused">Descargar</div></a>');
				}else if( window.videoLanguage=="fr"){
					downloadLinkDiv = s.createDiv('<a href="http://p5js.org/download/"  target="_blank"><div class="sketch-download-link focused">Télécharger</div></a>');
				}else{
					downloadLinkDiv = s.createDiv('<a href="http://p5js.org/download/"  target="_blank"><div class="sketch-download-link focused">Download</div></a>');
				};
				
				downloadLinkDiv.parent('video-overlay');

				s.frameRate(0);
				notdisplayed=false
			}
		}
		if(window.videoCurrentTimeGlobal>104){
			opacity--;
		}
	}




	// s.mouseMoved  = () => {
	// 	s.stroke(237, 30, 97, opacity);
	// 	s.strokeWeight(4);
	// 	s.line(s.mouseX, s.mouseY, s.pmouseX, s.pmouseY);
	// 	s.pmouseX=s.mouseX;
	// 	s.pmouseY=s.mouseY;
	// }

}

module.exports= webeditorLink;







