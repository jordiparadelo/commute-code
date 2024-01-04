import dynamicImport from "./src/utils/dynamicImport";

document.onLoad = init();

function init() {
	
	const COMPONENTS = {
		".rc-section_header": "headerAnimation",
		'[wb-embed="video"]': "initCustomVideo",
		"#platform-features .rc-feature-item": "stepAnimation",
		"#customer-success": "numbersAnimation",
		'.w-tab-menu [role="tab"]': "tabSelection",
		".rc-announcement-bar": "initAnnounceBar",
	};

	Object.entries(COMPONENTS).forEach(([element, moduleName]) => {
		dynamicImport(element, moduleName);
	});
}
