

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Snippets/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8._03C4beY.js","_app/immutable/chunks/scheduler.PqqiGW0i.js","_app/immutable/chunks/index.McjGVyOV.js"];
export const stylesheets = [];
export const fonts = [];
