/*********************
// Webeditor Link
// Description: Link to the Webeditor & Download pages
*********************/

const webeditorLink = (s) => {
	let webeditorLinkDiv;
	let downloadLinkDiv;
	let webeditorLinkText;
	let downloadLinkText;

	s.setup  = () => {
		s.pixelDensity(1);
		let windowWidth = window.innerWidth ;
		let windowHeight = windowWidth  * 0.562;
		s.canvas = s.createCanvas(windowWidth, windowHeight);
		s.canvas.parent('video-overlay');

		//Change language of link text depending on the selected language 
		if(window.videoLanguage == "es"){
			webeditorLinkText = "Editor web p5";
			downloadLinkText	="Descargar";
		}else if(window.videoLanguage == "fr"){
			webeditorLinkText = "P5 web editor";
			downloadLinkText = "Télécharger";
		}else{
			webeditorLinkText = "P5 Web Editor";
			downloadLinkText = "Download";
		}

		// Create the upper link on load (note the styling is done with css)
		webeditorLinkDiv = s.createDiv('<a href="https://editor.p5js.org/"  target="_blank"><div class="sketch-pulsing-link-upper pulsing-animation">' + webeditorLinkText + '</div></a>');
		webeditorLinkDiv.parent('video-overlay');

	};


	s.draw  = () => {
		s.clear();

		// Create the lower link when the time is appropriate
		if(window.videoCurrentTimeGlobal>98){
			webeditorLinkDiv.removeClass('pulsing-animation');
			downloadLinkDiv = s.createDiv('<a href="http://p5js.org/download/"  target="_blank"><div class="sketch-pulsing-link-lower pulsing-animation">' + downloadLinkText + '</div></a>');
			downloadLinkDiv.parent('video-overlay');
			s.frameRate(0); //pause the sketch so it doesn't keep creating new divs
		}
	};
};

module.exports= webeditorLink;







