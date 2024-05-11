

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/async/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/12.7DvYN5-1.js","_app/immutable/chunks/scheduler.PqqiGW0i.js","_app/immutable/chunks/index.McjGVyOV.js"];
export const stylesheets = ["_app/immutable/assets/12.EFi-NPBf.css"];
export const fonts = [];
