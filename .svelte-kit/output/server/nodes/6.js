

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/arrays/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.066bdafe.js","_app/immutable/chunks/scheduler.41143b43.js","_app/immutable/chunks/index.a9e5b95b.js"];
export const stylesheets = ["_app/immutable/assets/6.e20cfc41.css"];
export const fonts = [];
