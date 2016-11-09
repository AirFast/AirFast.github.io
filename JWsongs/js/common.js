$(function() {

	// selecting node
	var myNode = document.querySelector('#jwSongs ul');

	myNode.addEventListener('click', function(e) {

		if (e.target.tagName === 'LI') {

			// create and append overlay
			var myOverlay = document.createElement('div');
			myOverlay.id = 'overlay';
			document.body.appendChild(myOverlay);

			var myOffBtn = document.createElement('div');
			myOffBtn.id = 'offBtn';
			myOverlay.appendChild(myOffBtn);

			var myFullscreen = document.createElement('div');
			myFullscreen.id = 'fullscreen';
			myOverlay.appendChild(myFullscreen);

			// getting data-src
			var mySrc = e.target.dataset.src;

			// create and append video
			var myVideo = document.createElement('video');
			myVideo.id = 'video';
			myVideo.setAttribute('controls', 'controls');
			myOverlay.appendChild(myVideo);

			// create and append source
			var mySource = document.createElement('source');
			mySource.src = 'musics/' + mySrc + '.mp3';
			mySource.setAttribute('tayp', 'audio/mpeg');
			myVideo.appendChild(mySource);

			// create and append track
			var myTrack = document.createElement('track');
			myTrack.src = 'lyrics/' + mySrc + '.vtt';
			myTrack.kind = 'subtitles';
			myTrack.srclang = 'uk';
			myTrack.label = 'Українська';
			myTrack.default = true;
			myVideo.appendChild(myTrack);

		} // target is an list

		myOffBtn.addEventListener('click', function() {
			if (myOverlay) {
				document.body.removeChild(myOverlay);
			}
		}, false);

		// fullscreen on/off 
		myFullscreen.addEventListener('click', function() {
			if (myVideo.requestFullscreen || myVideo.mozRequestFullScreen || myVideo.webkitRequestFullscreen ||	myVideo.msRequestFullscreen) {
				if (myVideo.requestFullscreen) {
					myVideo.requestFullscreen();
				} else if (myVideo.webkitRequestFullscreen) {
					myVideo.webkitRequestFullscreen();
				} else if (myVideo.mozRequestFullScreen) {
					myVideo.mozRequestFullScreen();
				} else if (myVideo.msRequestFullscreen) {
					myVideo.msRequestFullscreen();
				}
			} else {
				myVideo.exitFullscreen();
				myVideo.webkitExitFullscreen();
				myVideo.mozCancelFullScreen();
				myVideo.msExitFullscreen();
			}
		}, false);
		
		
	}, false); // list is clicked

});
