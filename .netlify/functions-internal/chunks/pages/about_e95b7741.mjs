/* empty css                         */import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent } from '../astro_828120c3.mjs';
import 'html-escaper';
import 'clsx';
import { $ as $$Layout } from './404_5e772442.mjs';

const $$Astro$4 = createAstro();
const $$Heading = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Heading;
  return renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20"><div class="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8"><div class="flex flex-col gap-4 sm:gap-6"><h1 class="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">Conócenos</h1><p class="mx-auto max-w-xl text-lg text-primary-950/70 dark:text-primary-200/70 sm:text-xl">
Descubre la historia y los valores que impulsan a New Models, una agencia de modelos
        comprometida con la excelencia y la creatividad en la industria de la moda. Aprende más
        sobre nuestro equipo apasionado y nuestra visión de empoderar a modelos talentosos para
        alcanzar su máximo potencial.
</p></div></div></section>`;
}, "C:/Users/HP TUPI S.A/OneDrive/Documentos/New Models/web-astro/astro-theme-stone/src/components/about/Heading.astro", void 0);

const $$Astro$3 = createAstro();
const $$Mission = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Mission;
  const stats = [
    {
      name: "A\xF1os en el Mundo del Modelaje",
      value: "25"
    },
    {
      name: "Expertos en el Equipo",
      value: "15"
    },
    {
      name: "Modelos",
      value: "35"
    },
    {
      name: "Reconocimientos",
      value: "9"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20"><div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"><div class="grid gap-16 lg:grid-cols-2 lg:gap-24"><img class="mx-auto h-auto w-full max-w-xl rounded-3xl" width="576" height="864" src="/assets/about.webp" alt="Our experts working together"><div class="flex flex-col gap-10"><!-- Mission description --><div class="space-y-8 sm:space-y-12"><h2 class="text-3xl font-medium tracking-tight sm:text-4xl">Nuestra Misión</h2><div class="space-y-6"><p class="text-base text-primary-950/70 dark:text-primary-200/70 sm:text-lg">
En New Models, nuestra misión es impulsar la industria de la moda a través del
              descubrimiento y el desarrollo de talentosos modelos. Nos esforzamos por promover la
              diversidad y la inclusión en cada proyecto en el que participamos. Nuestro compromiso
              es brindar oportunidades y apoyo a modelos de todas las edades y antecedentes para que
              puedan alcanzar su máximo potencial en esta emocionante industria. Buscamos no solo
              que nuestros modelos sean exitosos, sino también que se conviertan en figuras
              influyentes y famosas en el mundo de la moda.
</p></div></div><!-- Stats --><dl class="grid grid-cols-1 gap-6 sm:grid-cols-2">${stats.map((stat) => renderTemplate`<div class="rounded-3xl border border-primary-900/10 p-6 dark:border-primary-300/10"><dt class="text-base">${stat.name}</dt><dd class="text-3xl font-medium tracking-tight">${stat.value}</dd></div>`)}</dl></div></div></div></section>`;
}, "C:/Users/HP TUPI S.A/OneDrive/Documentos/New Models/web-astro/astro-theme-stone/src/components/about/Mission.astro", void 0);

const $$Astro$2 = createAstro();
const $$Team = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Team;
  const team = [
    {
      name: "Mary Prieto",
      image: "/assets/team-2.webp",
      job: "Directora General"
    },
    {
      name: "Diego O",
      image: "/assets/team-2.webp",
      job: "Senior Designer"
    },
    {
      name: "Lorena G",
      image: "/assets/team-3.webp",
      job: "Fotografia y Video"
    },
    {
      name: "Denis R",
      image: "/assets/team-3.webp",
      job: "Senior Developer"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20"><div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"><div class="sm:space-8 space-y-12"><h2 class="text-3xl font-medium tracking-tight sm:text-4xl">Conoce a nuestro equipo</h2><ul role="list" class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">${team.map((item) => renderTemplate`<li class="rounded-3xl border border-primary-900/10 px-6 py-8 dark:border-primary-300/10"><div class="space-y-6"><img class="mx-auto h-auto w-16 rounded-full"${addAttribute(item.image, "src")}${addAttribute(item.name, "alt")}><div class="text-center"><h3 class="text-lg font-medium">${item.name}</h3><p class="text-base text-primary-950/70 dark:text-primary-200/70">${item.job}</p></div></div></li>`)}</ul></div></div></section>`;
}, "C:/Users/HP TUPI S.A/OneDrive/Documentos/New Models/web-astro/astro-theme-stone/src/components/about/Team.astro", void 0);

const $$Astro$1 = createAstro();
const $$Values = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Values;
  const values = [
    [
      {
        ref: "01",
        name: "Pasi\xF3n",
        description: "Nuestra pasi\xF3n por la moda y el modelaje impulsa nuestro compromiso con la excelencia y la creatividad."
      },
      {
        ref: "02",
        name: "Innovaci\xF3n",
        description: "Buscamos constantemente la innovaci\xF3n en la industria de la moda para mantenernos a la vanguardia."
      }
    ],
    [
      {
        ref: "03",
        name: "Diversidad",
        description: "Valoramos la diversidad y la inclusi\xF3n, celebrando la belleza en todas sus formas y tallas."
      },
      {
        ref: "04",
        name: "Profesionalismo",
        description: "Nuestro enfoque profesional y dedicaci\xF3n garantiza un servicio de alta calidad para nuestros clientes."
      }
    ]
  ];
  return renderTemplate`${maybeRenderHead()}<section class="py-16 sm:py-20"><div class="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8"><div class="flex flex-col gap-8 lg:gap-12"><h2 class="text-3xl font-medium tracking-tight sm:text-4xl">Nuestros Valores</h2><div class="grid gap-8 lg:grid-cols-2">${values.map((column, index) => renderTemplate`<div${addAttribute(["space-y-8", index === 1 && "lg:mt-16"], "class:list")}>${column.map((value) => renderTemplate`<div class="flex flex-col gap-12 rounded-3xl bg-primary-500/10 px-6 py-8 dark:bg-primary-400/10"><p class="text-sm">${value.ref}</p><div class="flex flex-col gap-4"><h3 class="text-xl font-medium">${value.name}</h3><p class="text-base text-primary-950/70 dark:text-primary-200/70 sm:text-lg">${value.description}</p></div></div>`)}</div>`)}</div></div></div></section>`;
}, "C:/Users/HP TUPI S.A/OneDrive/Documentos/New Models/web-astro/astro-theme-stone/src/components/about/Values.astro", void 0);

const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Descubre la historia y los valores que impulsan a New Models, una agencia de modelos comprometida con la excelencia y la creatividad en la industria de la moda. Aprende m\xE1s sobre nuestro equipo apasionado y nuestra visi\xF3n de empoderar a modelos talentosos para alcanzar su m\xE1ximo potencial.", "title": "Con\xF3cenos" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Heading", $$Heading, {})}${renderComponent($$result2, "Mission", $$Mission, {})}${renderComponent($$result2, "Values", $$Values, {})}${renderComponent($$result2, "Team", $$Team, {})}` })}`;
}, "C:/Users/HP TUPI S.A/OneDrive/Documentos/New Models/web-astro/astro-theme-stone/src/pages/about.astro", void 0);

const $$file = "C:/Users/HP TUPI S.A/OneDrive/Documentos/New Models/web-astro/astro-theme-stone/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };
