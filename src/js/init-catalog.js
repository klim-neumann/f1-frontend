const CATALOG_ELEMENT_OPEN_CLASS_NAME = 'catalog--open';
const CATALOG_NAV_ELEMENT_OPEN_CLASS_NAME = 'catalog__nav--open';

function resetCatalogButtonElements(catalogButtonElementMap) {
	catalogButtonElementMap.forEach((isCatalogButtonElementExpanded, catalogButtonElement) => {
		if (isCatalogButtonElementExpanded) {
			const catalogNavElement = document.getElementById(catalogButtonElement.getAttribute('aria-controls'));
			catalogNavElement.classList.remove(CATALOG_NAV_ELEMENT_OPEN_CLASS_NAME);
			catalogButtonElement.setAttribute('aria-expanded', false);
			catalogButtonElementMap.set(catalogButtonElement, false);
		}
	});
}

function initCatalogButtons() {
	const catalogButtonElements = document.querySelectorAll('.catalog__button');

	const catalogButtonElementMap = new Map(
		[...catalogButtonElements].map((catalogButtonElement) => [catalogButtonElement, false]),
	);

	catalogButtonElements.forEach((catalogButtonElement) => {
		catalogButtonElement.addEventListener('click', () => {
			const isCatalogButtonElementExpanded = !catalogButtonElementMap.get(catalogButtonElement);

			resetCatalogButtonElements(catalogButtonElementMap);

			catalogButtonElement.setAttribute('aria-expanded', isCatalogButtonElementExpanded);

			const catalogNavElement = document.getElementById(catalogButtonElement.getAttribute('aria-controls'));

			if (isCatalogButtonElementExpanded) {
				catalogNavElement.classList.add(CATALOG_NAV_ELEMENT_OPEN_CLASS_NAME);
			} else {
				catalogNavElement.classList.remove(CATALOG_NAV_ELEMENT_OPEN_CLASS_NAME);
			}

			catalogButtonElementMap.set(catalogButtonElement, isCatalogButtonElementExpanded);
		});
	});
}

function initCatalogButton() {
	let isCatalogButtonElementExpanded = false;

	const catalogElement = document.getElementById('page__catalog');
	const catalogButtonElement = document.getElementById('header__catalog-button');

	const closeCatalog = () => {
		if (isCatalogButtonElementExpanded) {
			isCatalogButtonElementExpanded = false;
			catalogButtonElement.setAttribute('aria-expanded', false);
			catalogElement.classList.remove(CATALOG_ELEMENT_OPEN_CLASS_NAME);
		}
	};

	catalogButtonElement.addEventListener('click', () => {
		isCatalogButtonElementExpanded = !isCatalogButtonElementExpanded;

		catalogButtonElement.setAttribute('aria-expanded', isCatalogButtonElementExpanded);

		if (isCatalogButtonElementExpanded) {
			catalogElement.classList.add(CATALOG_ELEMENT_OPEN_CLASS_NAME);
		} else {
			catalogElement.classList.remove(CATALOG_ELEMENT_OPEN_CLASS_NAME);
		}
	});

	const mainElement = document.querySelector('main');
	const footerElement = document.querySelector('footer');

	mainElement.addEventListener('click', () => { closeCatalog(); });
	footerElement.addEventListener('click', () => { closeCatalog(); });
}

function initCatalog() {
	initCatalogButton();
	initCatalogButtons();
}

export default initCatalog;
