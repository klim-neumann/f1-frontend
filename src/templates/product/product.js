import '../../styles/vars.css';
import '../../styles/page.css';

import '../../styles/organisms/header.css';
import '../../styles/organisms/catalog.css';
import '../../styles/organisms/product.css';
import '../../styles/organisms/offers.css';
import '../../styles/organisms/footer.css';

import '@glidejs/glide/dist/css/glide.core.css';
import '@glidejs/glide/dist/css/glide.theme.css';

import Glide from '@glidejs/glide';

import initCommon from '../../js/init-common';

function main() {
	initCommon();

	new Glide('.glide').mount();
}

document.addEventListener('DOMContentLoaded', () => {
	main();
});
