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

    init();

    function init() {
        addEventListeners();
    }

    // Function to add event listeners for the custom video
    function addEventListeners() {
        // Event listener for the sound control button
        soundButton.addEventListener("click", (event) => {
            if (video.muted) {
                // Unmute the video and play if paused
                soundButton.innerHTML = "MUTE VIDEO";
                if (video.paused) {
                    video.muted = false;
                    video.play();
                } else {
                    // Mute and reset video back to start on click
                    video.muted = false;
                    video.currentTime = 0;
                }
            } else {
                // Mute the video
                soundButton.innerHTML = "PLAY WITH SOUND";
                video.muted = true;
            }
        });

        // Create the observer for checking if the video is in view
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

        // Pause the video by default
        video.pause();
        
        // Observe the video for intersection changes
        observer.observe(video);
    }
}

export default initCustomVideo;
