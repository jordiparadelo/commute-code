async function dynamicImport(componentName) {
    try {
      // TODO: Resolve import URL
        const module = await import(`http://localhost:5173/src/components/${componentName}.js`);
        return module;
      } catch (error) {
        console.error(`⚠️ Error importing ${componentName}:, ${error.message}`);
        return null;
      }
}

function observeElement(element, componentName) {
    const target = document.querySelector(element)

    if(!target) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          dynamicImport(componentName).then((module) => {
            if (module) {
              // console.log({target: entry.target, module: module.default})
              module.default();
            }
          });
        }
      });
    });
  
    observer.observe(target);
  };

export default observeElement;