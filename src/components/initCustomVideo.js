function initCustomVideo() {
	// Select all videos with data attribute wb-embed="video"
	const videos = document.querySelectorAll('[wb-embed="video"]');

	// Loop through all the videos
	videos.forEach((video) => {
		new CustomVideo(video)
	});

	
}

function CustomVideo(video) {

    let soundButton = video.parentElement.parentElement.querySelector(
		'[sound-control="true"]'
	);

	init()

	function init() {
		config()
		addEventListeners()
	}

	function config() {

	}

	function addEventListeners() {
		soundButton.addEventListener("click", (event) => {
			if (video.muted) {
				soundButton.innerHTML = "MUTE VIDEO";
				if (video.paused) {
					video.muted = false;
					video.play();
				} else {
					//video.pause();
					video.muted = false;
					video.currentTime = 0; // resets video back to start on click
				}
			} else {
				soundButton.innerHTML = "PLAY WITH SOUND";
				video.muted = true;
			}
		});


		// Create the observer for checking if video is in view
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.play();
					} else {
						entry.target.pause();
					}
				});
			},
			{
				threshold: 0.5, // 0 (default) - element must be totally offscreen, 0.5 - 50%, 1 - element fully on screen
			}
		);
	
		// Loop through all the videos
			video.pause();
			observer.observe(video);
	}


}

export default initCustomVideo;
