

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/arrays/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.4HJwfth3.js","_app/immutable/chunks/scheduler.PqqiGW0i.js","_app/immutable/chunks/index.McjGVyOV.js"];
export const stylesheets = ["_app/immutable/assets/10.8CRMwCxG.css"];
export const fonts = [];
