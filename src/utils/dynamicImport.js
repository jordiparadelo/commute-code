async function dynamicImport(module) {
	let importedModule;

	try {
		if (import.meta.env.MODE === "development") {
			importedModule = await import(`@components/${module}.js`);
		} else if (import.meta.env.MODE === "production") {
			importedModule = await import(`/dist/${module}.js`);
		}
		return importedModule;
	} catch (error) {
		console.error(`⚠️ Error importing ${module}:, ${error.message}`);
		return null;
	}
}

function observeElement(element, componentName) {
	// Search for the element in the document
	const target = document.querySelector(element);

	if (!target) return; // If element is not found, return immediately

	dynamicImport(componentName).then((module) => {
		if (module) {
			// console.log({ target: target, module: module.default });
			module.default(); // After import the module, execute it
		}
	});
}

export default observeElement;
