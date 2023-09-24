/* empty css                         */import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent } from '../astro_828120c3.mjs';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './404_5e772442.mjs';

const $$Astro$4 = createAstro();
const $$Cta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Cta;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20"><div class="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8"><div class="flex flex-col items-center gap-8 rounded-3xl bg-primary-500/10 px-5 py-16 dark:bg-primary-400/10 sm:gap-10"><div class="flex flex-col gap-4 sm:gap-6"><h2 class="mx-auto max-w-sm text-3xl font-medium tracking-tight sm:text-4xl">
¿Necesitas Modelos Profesionales?
</h2><p class="mx-auto max-w-2xl text-lg text-primary-950/70 dark:text-primary-200/70">
New Models es tu socio ideal para encontrar modelos profesionales talentosos para tu
          próximo proyecto de moda, sesión de fotos, evento promocional o campaña publicitaria.
          Nuestros modelos están listos para destacar y dar vida a tus ideas. ¡Haz tu elección y
          lleva tu proyecto al siguiente nivel con nosotros!
</p></div><a href="/contact" class="inline-flex items-center justify-center rounded-full border border-transparent bg-primary-600 px-5 py-3 text-base font-medium text-white transition hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 dark:bg-primary-400 dark:text-primary-950 dark:hover:bg-primary-300 dark:focus-visible:outline-primary-400">
Contacto
</a></div></div></section>`;
}, "C:/Users/HP TUPI S.A/OneDrive/Documentos/New Models/web-astro/astro-theme-stone/src/components/home/Cta.astro", void 0);

const $$Astro$3 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20"><div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"><div class="flex flex-col gap-16"><div class="flex flex-col items-start gap-8 sm:gap-10"><div class="flex max-w-xl flex-col items-start gap-4 sm:gap-6"><h1 class="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
Agencia de Modelos en Paraguay
</h1><p class="text-lg text-primary-950/70 dark:text-primary-200/70 sm:text-xl">
Eventos, Shows, Presentaciones, Desfiles de Moda
</p></div><a href="/about" class="inline-flex items-center justify-center rounded-full border border-transparent bg-primary-600 px-5 py-3 text-base font-medium text-white transition hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 dark:bg-primary-400 dark:text-primary-950 dark:hover:bg-primary-300 dark:focus-visible:outline-primary-400">
Conocer Mas
</a></div><img class="h-full w-full rounded-3xl" width="1280" height="640" src="/assets/hero.webp" alt="Hero picture"></div></div></section>`;
}, "C:/Users/HP TUPI S.A/OneDrive/Documentos/New Models/web-astro/astro-theme-stone/src/components/home/Hero.astro", void 0);

const $$Astro$2 = createAstro();
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Services;
  const services = [
    {
      step: "01",
      name: "Modelaje Profesional",
      description: "Ofrecemos servicios de modelaje profesional para desfiles de moda, sesiones de fotos y eventos promocionales. Nuestros modelos est\xE1n entrenados y listos para destacar en la industria de la moda."
    },
    {
      step: "02",
      name: "Sesiones de Fotograf\xEDa de Alta Calidad",
      description: "Capturamos momentos especiales con sesiones de fotograf\xEDa de alta calidad. Ya sea para retratos personales, fotograf\xEDa de moda o publicidad, nuestro equipo de fot\xF3grafos est\xE1 listo para crear im\xE1genes impresionantes."
    },
    {
      step: "03",
      name: "Asesoramiento de Imagen y Estilo",
      description: "Ayudamos a nuestros clientes a desarrollar su estilo personal y a destacar en cualquier ocasi\xF3n. Nuestros expertos en moda y estilo ofrecen asesoramiento personalizado para lucir siempre elegante."
    },
    {
      step: "04",
      name: "Casting y Selecci\xF3n de Modelos",
      description: "Organizamos castings y seleccionamos modelos para diversos proyectos. Contamos con una amplia base de datos de modelos talentosos y podemos encontrar el ajuste perfecto para su evento o campa\xF1a."
    },
    {
      step: "05",
      name: "Promoci\xF3n en Redes Sociales",
      description: "Impulse su marca en las redes sociales con nuestras estrategias de promoci\xF3n. Creamos contenido atractivo y gestionamos campa\xF1as publicitarias para aumentar su presencia en l\xEDnea."
    },
    {
      step: "06",
      name: "Eventos de Moda y Producci\xF3n",
      description: "Organizamos eventos de moda y producimos desfiles de moda de alto nivel. Desde la planificaci\xF3n hasta la ejecuci\xF3n, nos encargamos de cada detalle para que su evento sea un \xE9xito."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20"><div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"><div class="flex flex-col gap-12 sm:gap-16"><h2 class="text-3xl font-medium tracking-tight sm:text-4xl">
Servicios<div class="bg-pink h-1 w-20 rounded"></div></h2><div class="grid gap-8 lg:grid-cols-3">${services.map((service) => renderTemplate`<div class="flex flex-col gap-12 rounded-3xl bg-primary-500/10 px-6 py-8 dark:bg-primary-400/10"><p class="text-sm">${service.step}</p><div class="flex flex-col gap-4"><h3 class="text-xl font-medium">${service.name}</h3><p class="text-base text-primary-950/70 dark:text-primary-200/70 sm:text-lg">${service.description}</p></div></div>`)}</div></div></div></section>`;
}, "C:/Users/HP TUPI S.A/OneDrive/Documentos/New Models/web-astro/astro-theme-stone/src/components/home/Services.astro", void 0);

const $$Astro$1 = createAstro();
const $$Testimonials = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Testimonials;
  const testimonials = [
    {
      name: "Discoteca BoraBora",
      description: "Anfitrion & RRPP",
      image: "/assets/testimonial-1.webp",
      message: "Evento tematico el Chavo del 8"
    },
    {
      name: "Discoteca BoraBora",
      description: "Anfitrion & RRPP",
      image: "/assets/testimonial-1.webp",
      message: "Evento tematico el Chavo del 8"
    },
    {
      name: "Discoteca BoraBora",
      description: "Anfitrion & RRPP",
      image: "/assets/testimonial-1.webp",
      message: "Evento tematico el Chavo del 8"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20"><div class="v mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8"><div class="flex flex-col gap-12 lg:gap-20"><h2 class="text-left text-3xl font-medium tracking-tight sm:text-4xl">
Últimos Eventos<div class="bg-pink h-1 w-20 rounded"></div></h2><div class="grid divide-y divide-primary-900/10 dark:divide-primary-300/10 lg:grid-cols-3 lg:divide-x lg:divide-y-0">${testimonials.map((testimonial) => renderTemplate`<figure class="mx-auto flex max-w-lg flex-col items-center gap-6 py-8 lg:px-8 lg:py-0"><div class="flex flex-row gap-2">${[...Array(1)].map(() => renderTemplate`<div class="h-1 w-20 rounded bg-white"></div>`)}</div><blockquote class="text-left text-lg italic leading-loose text-primary-950/70 dark:text-primary-200/70"><p>${testimonial.message}</p></blockquote><figcaption class="flex flex-col gap-4"><img class="mx-auto h-40 w-40 "${addAttribute(testimonial.image, "src")} alt=""><div class="text-center"><div class="text-base font-medium">${testimonial.name}</div><div class="text-sm text-primary-950/70 dark:text-primary-200/70">${testimonial.description}</div></div></figcaption></figure>`)}</div></div></div></section>`;
}, "C:/Users/HP TUPI S.A/OneDrive/Documentos/New Models/web-astro/astro-theme-stone/src/components/home/Testimonials.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Modelaje profesional y eventos en Paraguay.", "title": "The New Models by Mary Prieto" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Hero", $$Hero, {})}${renderComponent($$result2, "Services", $$Services, {})}${renderComponent($$result2, "Testimonials", $$Testimonials, {})}${renderComponent($$result2, "Cta", $$Cta, {})}` })}`;
}, "C:/Users/HP TUPI S.A/OneDrive/Documentos/New Models/web-astro/astro-theme-stone/src/pages/index.astro", void 0);

const $$file = "C:/Users/HP TUPI S.A/OneDrive/Documentos/New Models/web-astro/astro-theme-stone/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
