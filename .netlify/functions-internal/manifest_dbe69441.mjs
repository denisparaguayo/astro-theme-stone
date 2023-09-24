import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import 'html-escaper';
import 'clsx';
import './chunks/astro_828120c3.mjs';
import 'mime';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/image-endpoint.js","pathname":"/_image","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.4b8986a2.js"}],"styles":[{"type":"external","src":"/_astro/404.14196987.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.4b8986a2.js"}],"styles":[{"type":"external","src":"/_astro/404.14196987.css"}],"routeData":{"route":"/styleguide","type":"page","pattern":"^\\/styleguide\\/?$","segments":[[{"content":"styleguide","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/styleguide.astro","pathname":"/styleguide","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.4b8986a2.js"}],"styles":[{"type":"external","src":"/_astro/404.14196987.css"}],"routeData":{"route":"/contact","type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.4b8986a2.js"}],"styles":[{"type":"external","src":"/_astro/404.14196987.css"}],"routeData":{"route":"/gracias","type":"page","pattern":"^\\/gracias\\/?$","segments":[[{"content":"gracias","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/gracias.astro","pathname":"/gracias","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.4b8986a2.js"}],"styles":[{"type":"external","src":"/_astro/404.14196987.css"}],"routeData":{"route":"/modelos","type":"page","pattern":"^\\/modelos\\/?$","segments":[[{"content":"modelos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/modelos.astro","pathname":"/modelos","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.4b8986a2.js"}],"styles":[{"type":"external","src":"/_astro/404.14196987.css"}],"routeData":{"route":"/privacy","type":"page","pattern":"^\\/privacy\\/?$","segments":[[{"content":"privacy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacy.astro","pathname":"/privacy","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.4b8986a2.js"}],"styles":[{"type":"external","src":"/_astro/404.14196987.css"}],"routeData":{"route":"/about","type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.4b8986a2.js"}],"styles":[{"type":"external","src":"/_astro/404.14196987.css"}],"routeData":{"route":"/404","type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.4b8986a2.js"}],"styles":[{"type":"external","src":"/_astro/404.14196987.css"}],"routeData":{"route":"/[id]","type":"page","pattern":"^\\/([^/]+?)\\/?$","segments":[[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/[id].astro","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","compressHTML":true,"componentMetadata":[["C:/Users/HP TUPI S.A/OneDrive/Documentos/New Models/web-astro/astro-theme-stone/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/HP TUPI S.A/OneDrive/Documentos/New Models/web-astro/astro-theme-stone/src/pages/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/HP TUPI S.A/OneDrive/Documentos/New Models/web-astro/astro-theme-stone/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/Users/HP TUPI S.A/OneDrive/Documentos/New Models/web-astro/astro-theme-stone/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["C:/Users/HP TUPI S.A/OneDrive/Documentos/New Models/web-astro/astro-theme-stone/src/pages/gracias.astro",{"propagation":"none","containsHead":true}],["C:/Users/HP TUPI S.A/OneDrive/Documentos/New Models/web-astro/astro-theme-stone/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/HP TUPI S.A/OneDrive/Documentos/New Models/web-astro/astro-theme-stone/src/pages/modelos.astro",{"propagation":"none","containsHead":true}],["C:/Users/HP TUPI S.A/OneDrive/Documentos/New Models/web-astro/astro-theme-stone/src/pages/privacy.astro",{"propagation":"none","containsHead":true}],["C:/Users/HP TUPI S.A/OneDrive/Documentos/New Models/web-astro/astro-theme-stone/src/pages/styleguide.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/about.astro":"chunks/pages/about_e95b7741.mjs","/src/pages/contact.astro":"chunks/pages/contact_83645e9f.mjs","/src/pages/gracias.astro":"chunks/pages/gracias_5475dfdf.mjs","/node_modules/astro/dist/assets/image-endpoint.js":"chunks/pages/image-endpoint_7e555282.mjs","/src/pages/index.astro":"chunks/pages/index_38a1b4c3.mjs","/src/pages/modelos.astro":"chunks/pages/modelos_47954ee8.mjs","/src/pages/privacy.astro":"chunks/pages/privacy_f5bc6816.mjs","/src/pages/styleguide.astro":"chunks/pages/styleguide_c9abd2c0.mjs","\u0000@astrojs-manifest":"manifest_dbe69441.mjs","\u0000@astro-page:node_modules/astro/dist/assets/image-endpoint@_@js":"chunks/image-endpoint_ecc46658.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_8adaec2d.mjs","\u0000@astro-page:src/pages/styleguide@_@astro":"chunks/styleguide_8b98be39.mjs","\u0000@astro-page:src/pages/contact@_@astro":"chunks/contact_c74ba27d.mjs","\u0000@astro-page:src/pages/gracias@_@astro":"chunks/gracias_fd0b03c1.mjs","\u0000@astro-page:src/pages/modelos@_@astro":"chunks/modelos_8126adc2.mjs","\u0000@astro-page:src/pages/privacy@_@astro":"chunks/privacy_d8381728.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_226ca403.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_27decced.mjs","\u0000@astro-page:src/pages/[id]@_@astro":"chunks/_id__b423e82b.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.4b8986a2.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/inter-latin-500-normal.d5333670.woff2","/_astro/inter-latin-400-normal.0364d368.woff2","/_astro/inter-latin-500-normal.bf069d84.woff","/_astro/inter-latin-400-normal.e3982e96.woff","/_astro/404.14196987.css","/android-chrome-192x192.png","/android-chrome-512x512.png","/apple-touch-icon.png","/favicon-16x16.png","/favicon-32x32.png","/favicon.ico","/site.webmanifest","/assets/about.webp","/assets/hero.webp","/assets/logo-inverted.svg","/assets/logo.svg","/assets/team-2.webp","/assets/team-3.webp","/assets/testimonial-1.webp","/assets/testimonial-2.webp","/assets/testimonial-3.webp","/_astro/hoisted.4b8986a2.js","/assets/modelo-1/imagen1.webp"]});

export { manifest };
