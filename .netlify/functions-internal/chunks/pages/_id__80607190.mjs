/* empty css                         */import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, e as addAttribute } from '../astro_828120c3.mjs';
import 'html-escaper';
import { $ as $$Layout } from './404_5e772442.mjs';

const modelos = [
	{
		id: "1",
		nombre: "Maria Prieto",
		edad: 25,
		altura: "5'9\"",
		experiencia: "5 años de experiencia en modelaje",
		especialidades: [
			"Pasarela",
			"Fotografía de moda",
			"Publicidad"
		],
		seguidores: "15,5",
		imagen: "/assets/team-3.webp",
		imagenes: [
			"/assets/modelo-1/imagen1.webp",
			"/assets/modelo-1/imagen1.webp",
			"/assets/modelo-1/imagen1.webp"
		]
	},
	{
		id: "2",
		nombre: "Juanita Rodríguez",
		edad: 25,
		altura: "5'9\"",
		experiencia: "5 años de experiencia en modelaje",
		especialidades: [
			"Pasarela",
			"Fotografía de moda",
			"Publicidad"
		],
		seguidores: "3,5",
		imagen: "/assets/team-3.webp",
		imagenes: [
			"/assets/modelo-1/imagen1.webp",
			"/assets/modelo-1/imagen1.webp",
			"/assets/modelo-1/imagen1.webp"
		]
	},
	{
		id: "3",
		nombre: "Reinaldo Rodríguez",
		edad: 25,
		altura: "5'9\"",
		experiencia: "5 años de experiencia en modelaje",
		especialidades: [
			"Pasarela",
			"Fotografía de moda",
			"Publicidad"
		],
		seguidores: "2,7",
		imagen: "/assets/team-3.webp",
		imagenes: [
			"/assets/modelo-1/imagen1.webp",
			"/assets/modelo-1/imagen1.webp",
			"/assets/modelo-1/imagen1.webp"
		]
	},
	{
		id: "4",
		nombre: "Denis  Rodríguez",
		edad: 25,
		altura: "5'9\"",
		experiencia: "5 años de experiencia en modelaje",
		especialidades: [
			"Pasarela",
			"Fotografía de moda",
			"Publicidad"
		],
		seguidores: "8,9",
		imagen: "/assets/team-3.webp",
		imagenes: [
			"/assets/modelo-1/imagen1.webp",
			"/assets/modelo-1/imagen1.webp",
			"/assets/modelo-1/imagen1.webp"
		]
	},
	{
		id: "5",
		nombre: "Emilio Rodríguez",
		edad: 25,
		altura: "5'9\"",
		experiencia: "5 años de experiencia en modelaje",
		especialidades: [
			"Pasarela",
			"Fotografía de moda",
			"Publicidad"
		],
		seguidores: "5,6",
		imagen: "/assets/team-3.webp",
		imagenes: [
			"/assets/modelo-1/imagen1.webp",
			"/assets/modelo-1/imagen1.webp",
			"/assets/modelo-1/imagen1.webp"
		]
	}
];

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const id = Astro2.params.id;
  let modelo;
  if (id) {
    modelo = modelos.find((m) => m.id === id);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Modelaje profesional y eventos en Paraguay.", "title": "The New Models by Mary Prieto" }, { "default": ($$result2) => renderTemplate`${modelo ? renderTemplate`${maybeRenderHead()}<section class="text-gray-600 body-font"><h1 class="  flex justify-center text-3xl font-semibold">Un titulo aqui</h1><div class="container px-5 py-24 mx-auto flex flex-col"><div class="lg:w-4/6 mx-auto"><div class="flex flex-col sm:flex-row mt-10 justify-center items-center"><div class="sm:w-1/3 text-center sm:pr-8 sm:py-8"><div class="flex flex-col text-left"><h2 class="text-3xl font-semibold   text-gray-900">${modelo.nombre}</h2><div class="w-20 h-1 bg-pink rounded mt-2 mb-4"></div><p class="text-gray-600 "><spam class="text-pink font-semibold">Edad:</spam>${modelo.edad} años</p><p class="text-gray-600 "><span class="text-pink font-semibold">Altura:</span>${modelo.altura}</p><p class="text-gray-600 "><span class="text-pink font-semibold">Experiencia:</span>${modelo.experiencia}</p><p class="text-gray-600 "><span class="text-pink font-semibold">Especialidades:</span>${modelo.especialidades.join(", ")}</p><p class="text-gray-600 "><span class="text-pink font-semibold">Instagram:</span>${modelo.seguidores} mil <span class="text-azul">Seguidores</span></p></div></div><!-- Imagen de la Modelos --><div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-pink sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left"><div class="flex justify-center"><img${addAttribute(modelo.imagen, "src")}${addAttribute(modelo.nombre, "alt")} class="h-50 w-50"></div><!-- Imagen de la Modelos --></div></div></div></div><!-- Galeria de Fotos --><h2 class="mb-10 mt-4 flex justify-center text-3xl font-semibold">Galería de Fotos</h2><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 container mx-auto "><!-- Itera sobre las imágenes del modelo y muestra cada una -->${modelo.imagenes.map((imagen) => renderTemplate`<img${addAttribute(imagen, "src")} class="w-full h-auto">`)}</div><div class="flex justify-center items-center mt-10 "><a href="/modelos" class="inline-flex items-center justify-center rounded-full border border-transparent bg-primary-600 px-5 py-3 text-base font-medium text-white transition hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 dark:bg-primary-400 dark:text-primary-950 dark:hover:bg-primary-300 dark:focus-visible:outline-primary-400">
Volver a Modelos
</a></div></section>` : renderTemplate`<div class="text-center"><h1 class="text-3xl font-semibold">Modelo no encontrado</h1><p class="text-gray-600">El modelo con ID ${id} no existe.</p></div>`}` })};`;
}, "C:/Users/HP TUPI S.A/OneDrive/Documentos/New Models/web-astro/astro-theme-stone/src/pages/[id].astro", void 0);

const $$file = "C:/Users/HP TUPI S.A/OneDrive/Documentos/New Models/web-astro/astro-theme-stone/src/pages/[id].astro";
const $$url = "/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _id_ as _, modelos as m };
