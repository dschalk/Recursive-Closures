

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/async3/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/9.78f81146.js","_app/immutable/chunks/scheduler.41143b43.js","_app/immutable/chunks/index.a9e5b95b.js"];
export const stylesheets = ["_app/immutable/assets/9.193677cb.css"];
export const fonts = [];
