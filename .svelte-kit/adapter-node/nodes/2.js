

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.RP4iant-.js","_app/immutable/chunks/scheduler.gYNbTIBg.js","_app/immutable/chunks/index.pqPhgd5I.js"];
export const stylesheets = ["_app/immutable/assets/2.lJsVanFg.css"];
export const fonts = [];
