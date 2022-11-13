import initCatalog from './init-catalog';
import injectSvg from './inject-svg';

function initCommon() {
	injectSvg();
	initCatalog();
}

export default initCommon;
