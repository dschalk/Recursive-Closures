

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/async3/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.e21a2eaf.js","_app/immutable/chunks/scheduler.41143b43.js","_app/immutable/chunks/index.8cc052f2.js"];
export const stylesheets = ["_app/immutable/assets/10.193677cb.css"];
export const fonts = [];
