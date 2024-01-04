/* WRAP ELEMENTS */
function wrapElements(elems, wrapType, wrapClass) {
	elems.forEach((char) => {
		const wrapEl = document.createElement(wrapType);
		wrapEl.classList = wrapClass;
		char.parentNode.appendChild(wrapEl);
		wrapEl.appendChild(char);
	});
}

export default wrapElements
