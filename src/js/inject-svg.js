function injectSvg() {
	const domParser = new DOMParser();

	const svgElements = document.querySelectorAll('svg[data-src]');

	svgElements.forEach(async (svgElement) => {
		const response = await fetch(svgElement.getAttribute('data-src'));

		if (response.ok) {
			const responseText = await response.text();
			const { firstChild: newSvgElement } = domParser.parseFromString(responseText, 'image/svg+xml');
			newSvgElement.classList.add(...svgElement.classList);
			svgElement.replaceWith(newSvgElement);
		}
	});
}

export default injectSvg;
