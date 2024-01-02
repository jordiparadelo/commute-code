import {
	headerAnimation,
	stepAnimation,
	numbersAnimation,
	tabSelection,
	initAnnounceBar,
	initCustomVideo,
} from "@components";

document.onLoad = init();

function init() {
	headerAnimation();
	stepAnimation();
	numbersAnimation();
	tabSelection();
	initAnnounceBar();
	initCustomVideo();
	// toggleAnnounceBar()
}
