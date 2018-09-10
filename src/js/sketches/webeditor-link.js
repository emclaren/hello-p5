
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
			webeditorLinkDiv=s.createDiv('<a href="https://editor.p5js.org/"  target="_blank">P5 Web Editor-Spanish</a>');
		}else if( window.videoLanguage=="fr"){
			webeditorLinkDiv=s.createDiv('<a href="https://editor.p5js.org/"  target="_blank">P5 Web Editor - French</a>');
		}else{
			webeditorLinkDiv=s.createDiv('<a href="https://editor.p5js.org/"  target="_blank">P5 Web Editor</a>');
		}
		webeditorLinkDiv.parent('video-overlay');
		webeditorLinkDiv.addClass('sketch-webeditor-link focused');
	}


	s.draw  = () => {
		s.clear();
		if(window.videoCurrentTimeGlobal>112){
			if(notdisplayed){
				forumLinkDiv.removeClass('focused');
				if( window.videoLanguage=="es"){
					downloadLinkDiv = s.createDiv('<a href="http://p5js.org/download/"  target="_blank">Download-spanish</a>');
				}else if( window.videoLanguage=="fr"){
					downloadLinkDiv = s.createDiv('<a href="http://p5js.org/download/"  target="_blank">Download-french</a>');
				}else{
					downloadLinkDiv = s.createDiv('<a href="http://p5js.org/download/"  target="_blank">Download</a>');
				};
				
				downloadLinkDiv.parent('video-overlay');
				downloadLinkDiv.addClass('sketch-download-link focused');
				s.frameRate(0);
				notdisplayed=false
			}
		}
		if(window.videoCurrentTimeGlobal>114){
			opacity--;
		}
	}




	s.mouseMoved  = () => {
		s.stroke(237, 30, 97, opacity);
		s.strokeWeight(4);
		s.line(s.mouseX, s.mouseY, s.pmouseX, s.pmouseY);
		s.pmouseX=s.mouseX;
		s.pmouseY=s.mouseY;
	}

}

module.exports= webeditorLink;







