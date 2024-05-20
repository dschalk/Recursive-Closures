

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Quantum/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/9.yBcd4YFA.js","_app/immutable/chunks/scheduler.PqqiGW0i.js","_app/immutable/chunks/index.McjGVyOV.js"];
export const stylesheets = [];
export const fonts = [];
