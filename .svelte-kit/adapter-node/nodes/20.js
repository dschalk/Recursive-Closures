

export const index = 20;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/cube8/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/20.1a123147.js","_app/immutable/chunks/scheduler.41143b43.js","_app/immutable/chunks/index.8cc052f2.js"];
export const stylesheets = ["_app/immutable/assets/20.c3c38d65.css"];
export const fonts = [];
