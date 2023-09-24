import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_dbe69441.mjs';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import 'html-escaper';
import 'clsx';
import './chunks/astro_828120c3.mjs';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/image-endpoint_ecc46658.mjs');
const _page1  = () => import('./chunks/index_8adaec2d.mjs');
const _page2  = () => import('./chunks/styleguide_8b98be39.mjs');
const _page3  = () => import('./chunks/contact_c74ba27d.mjs');
const _page4  = () => import('./chunks/gracias_fd0b03c1.mjs');
const _page5  = () => import('./chunks/modelos_8126adc2.mjs');
const _page6  = () => import('./chunks/privacy_d8381728.mjs');
const _page7  = () => import('./chunks/about_226ca403.mjs');
const _page8  = () => import('./chunks/404_27decced.mjs');
const _page9  = () => import('./chunks/_id__b423e82b.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/image-endpoint.js", _page0],["src/pages/index.astro", _page1],["src/pages/styleguide.astro", _page2],["src/pages/contact.astro", _page3],["src/pages/gracias.astro", _page4],["src/pages/modelos.astro", _page5],["src/pages/privacy.astro", _page6],["src/pages/about.astro", _page7],["src/pages/404.astro", _page8],["src/pages/[id].astro", _page9]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
