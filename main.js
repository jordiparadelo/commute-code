import dynamicImport from "./src/utils/dynamicImport";

document.onLoad = init();

function init() {
	
	const COMPONENTS = {
		"#noise": "noise",
		'body': "initSmoothScrolling",
		'body': "initTextAnimation",
		".work-item": "initFeaturedWorks",
		'.headline_video': "loadAnimation",
	};

	Object.entries(COMPONENTS).forEach(([element, moduleName]) => {
		dynamicImport(element, moduleName);
	});
}
