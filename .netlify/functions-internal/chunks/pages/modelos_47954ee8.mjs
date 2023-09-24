/* empty css                         */import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent } from '../astro_828120c3.mjs';
import 'html-escaper';
import 'clsx';
import { m as modelos } from './_id__80607190.mjs';
import { $ as $$Layout } from './404_5e772442.mjs';

const $$Astro$3 = createAstro();
const $$Cta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Cta;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20"><div class="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8"><div class="flex flex-col items-center gap-8 rounded-3xl bg-primary-500/10 px-5 py-16 dark:bg-primary-400/10 sm:gap-10"><div class="flex flex-col gap-4 sm:gap-6"><h2 class="text-3xl font-medium tracking-tight sm:text-4xl">¿Tienes preguntas?</h2></div><div class="flex items-center justify-center"><a href="/contact" class="inline-flex items-center justify-center rounded-full border border-transparent bg-primary-600 px-5 py-3 text-base font-medium text-white transition hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 dark:bg-primary-400 dark:text-primary-950 dark:hover:bg-primary-300 dark:focus-visible:outline-primary-400">
Contacto
</a></div></div></div></section>`;
}, "C:/Users/HP TUPI S.A/OneDrive/Documentos/New Models/web-astro/astro-theme-stone/src/components/modelos/Cta.astro", void 0);

const $$Astro$2 = createAstro();
const $$Heading = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Heading;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20"><div class="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8"><div class="flex flex-col gap-4 sm:gap-6"><h1 class="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">Modelos</h1><p class="mx-auto max-w-xl text-lg text-primary-950/70 dark:text-primary-200/70 sm:text-xl">
Perfil de Modelos
</p></div></div></section>`;
}, "C:/Users/HP TUPI S.A/OneDrive/Documentos/New Models/web-astro/astro-theme-stone/src/components/modelos/Heading.astro", void 0);

const $$Astro$1 = createAstro();
const $$ModelosTable = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ModelosTable;
  return renderTemplate`${maybeRenderHead()}<section class="container mx-auto p-5"><div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">${modelos.map((modelo) => renderTemplate`<div class="rounded-lg  p-4 "><a${addAttribute(`/${modelo.id}`, "href")} class="block"><img${addAttribute(modelo.imagen, "src")}${addAttribute(modelo.nombre, "alt")} class="mb-2 h-48 w-full rounded-lg object-cover"><h2 class="text-gray-900 text-3xl   font-semibold">${modelo.nombre}</h2><div class="bg-pink mb-4 mt-2 h-1 w-10 rounded"></div><p class="text-gray-600">${modelo.especialidades.join(", ")}</p></a></div>`)}</div></section>`;
}, "C:/Users/HP TUPI S.A/OneDrive/Documentos/New Models/web-astro/astro-theme-stone/src/components/modelos/ModelosTable.astro", void 0);

const $$Astro = createAstro();
const $$Modelos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Modelos;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Perfil de Modelos", "title": "Modelos de la Agencia" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Heading", $$Heading, {})}${renderComponent($$result2, "ModelosTable", $$ModelosTable, {})}${renderComponent($$result2, "Cta", $$Cta, {})}` })}`;
}, "C:/Users/HP TUPI S.A/OneDrive/Documentos/New Models/web-astro/astro-theme-stone/src/pages/modelos.astro", void 0);

const $$file = "C:/Users/HP TUPI S.A/OneDrive/Documentos/New Models/web-astro/astro-theme-stone/src/pages/modelos.astro";
const $$url = "/modelos";

export { $$Modelos as default, $$file as file, $$url as url };
