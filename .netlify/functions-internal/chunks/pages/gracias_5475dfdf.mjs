/* empty css                         */import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_828120c3.mjs';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './404_5e772442.mjs';

const $$Astro = createAstro();
const $$Gracias = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Gracias;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "P\xE1gina de Agradecimiento por enviar un mensaje a la Agencia The New Models", "title": "Muchas Gracias" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="container mx-auto mt-10"><h1 class="text-center text-3xl font-semibold">¡Gracias por tu mensaje!</h1><p class="mt-4 text-center text-lg">
Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto.
</p><div class="mt-8 flex justify-center"><a href="/" class="rounded-full bg-primary-600 px-4 py-2 text-lg text-white hover:bg-primary-700">Volver a la página principal</a></div></div>` })}`;
}, "C:/Users/HP TUPI S.A/OneDrive/Documentos/New Models/web-astro/astro-theme-stone/src/pages/gracias.astro", void 0);

const $$file = "C:/Users/HP TUPI S.A/OneDrive/Documentos/New Models/web-astro/astro-theme-stone/src/pages/gracias.astro";
const $$url = "/gracias";

export { $$Gracias as default, $$file as file, $$url as url };
