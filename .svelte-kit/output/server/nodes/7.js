

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/arrays/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.8fda8714.js","_app/immutable/chunks/scheduler.41143b43.js","_app/immutable/chunks/index.8cc052f2.js"];
export const stylesheets = ["_app/immutable/assets/7.e20cfc41.css"];
export const fonts = [];
