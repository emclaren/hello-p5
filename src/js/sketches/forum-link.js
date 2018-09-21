/*********************
// Forum Link
// Description: Link to the Processing Forum & Community pages
*********************/


const forumLink = (s) => {
	let forumLinkDiv;
	let communityLinkDiv;
	let forumLinkText;
	let communityLinkText;

	s.setup  = () => {
		s.pixelDensity(1);
		let windowWidth = window.innerWidth ;
		let windowHeight = windowWidth  * 0.562;
		s.canvas = s.createCanvas(windowWidth, windowHeight);
		s.canvas.parent('video-overlay');

		//Change language of link text depending on the selected language 
		if(window.videoLanguage == "es"){
			forumLinkText = "Foros";
			communityLinkText	= "Comunidad";
		}else if(window.videoLanguage == "fr"){
			forumLinkText = "Forum";
			communityLinkText = "Communauté";
		}else{
			forumLinkText = "Forum";
			communityLinkText = "Community";
		}

		// Create the upper link on load (note the styling is done with css)
		forumLinkDiv = s.createDiv('<a href="https://discourse.processing.org/"  target="_blank"><div class="sketch-pulsing-link-upper pulsing-animation">' + forumLinkText + '</div></a>');
		forumLinkDiv.parent('video-overlay');
	};


	s.draw  = () => {
		s.clear();

		// Create the lower link when the time is appropriate
		if(window.videoCurrentTimeGlobal>113){
			forumLinkDiv.removeClass('pulsing-animation');
			communityLinkDiv = s.createDiv('<a href="http://p5js.org/community/"  target="_blank"><div class="sketch-pulsing-link-lower pulsing-animation">'+communityLinkText+'</a>');
			communityLinkDiv.parent('video-overlay');
			s.frameRate(0); //pause the sketch so it doesn't keep creating new divs

		}
		if(window.videoPlaying=false){
			forumLinkDiv.removeClass('pulsing-animation');
			communityLinkDiv.removeClass('pulsing-animation')
		}
	};
};





module.exports= forumLink;