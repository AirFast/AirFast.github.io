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

			// getting data-src
			var mySrc = e.target.dataset.src;

			// create and append video
			var myVideo = document.createElement('video');
			myVideo.id = 'video';
			myVideo.setAttribute('controls', 'controls');
			//myVideo.setAttribute('allowfullscreen', '');
			//myVideo.width = '500';
			//myVideo.height = '500';
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

		//window.addEventListener('scroll', function() {
			//myVideo.style.top = window.pageYOffset + 50 + 'px';
			//myVideo.style.left = window.pageXOffset + 'px';
		//}, false);

		var elem = document.getElementById("video");
		if (elem.requestFullscreen) {
			elem.requestFullscreen();
		}
		
	}, false); // list is clicked

});
