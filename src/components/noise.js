import "https://cdn.jsdelivr.net/gh/sarathsaleem/grained@master/grained.js"

/* NOISE EFFECT */
function noise() {
	const element = document.querySelector('#noise')

	if(!element) return

	var options = {
		animate: true,
		patternWidth: 600,
		patternHeight: 600,
		grainOpacity: 0.1,
		grainDensity: 1,
		grainWidth: 0.7,
		grainHeight: 0.7,
	};
	grained("#noise", options);
}

export default noise;
