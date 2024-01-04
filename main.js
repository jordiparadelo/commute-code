import {
	noise,
	initSmoothScrolling,
	initTextAnimation,
	initFeaturedWorks,
	loadingAnimation,
} from "@components";

document.onLoad = init();

function init() {
	noise();
	initSmoothScrolling();
	initTextAnimation();
	initFeaturedWorks();
	loadingAnimation();
}
