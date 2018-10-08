/*********************
// Webeditor Link
// Description: Link to the Webeditor & Download pages
*********************/

const webeditorLink = (p5) => {
	let webeditorLinkDiv;
	let downloadLinkDiv;
	let webeditorLinkText;
	let downloadLinkText;
	let linkHidden=true;
	p5.setup  = () => {
		p5.pixelDensity(1);
		let windowWidth = window.innerWidth ;
		let windowHeight = windowWidth  * 0.562;
		p5.canvas = p5.createCanvas(windowWidth, windowHeight);
		p5.canvas.parent('video-overlay');
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
		webeditorLinkDiv = p5.createDiv('<a href="https://editor.p5js.org/"  target="_blank"><div class="sketch-link sketch-link-upper sketch-link-animation">' + webeditorLinkText + ' >> </div></a>');
		webeditorLinkDiv.parent('video-overlay');
	};


	p5.draw  = () => {
		p5.clear();
		// Create the lower link when the time is appropriate
		if(window.videoCurrentTimeGlobal>98){
			if(linkHidden){
			downloadLinkDiv = p5.createDiv('<a href="http://p5js.org/download/"  target="_blank"><div class="sketch-link-lower sketch-link sketch-link-animation">' + downloadLinkText + ' >> </div></a>');
			downloadLinkDiv.parent('video-overlay');
			linkHidden = false;
			}
		}
	};
};

module.exports= webeditorLink;







