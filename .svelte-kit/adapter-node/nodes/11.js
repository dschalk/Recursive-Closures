

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/async/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/11.MGnBL2H2.js","_app/immutable/chunks/scheduler.PqqiGW0i.js","_app/immutable/chunks/index.McjGVyOV.js"];
export const stylesheets = ["_app/immutable/assets/11.EFi-NPBf.css"];
export const fonts = [];
