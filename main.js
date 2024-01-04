import dynamicImport from "@utils/dynamicImport";

document.onLoad = init();

function init() {

	console.log(import.meta.env);
	
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
