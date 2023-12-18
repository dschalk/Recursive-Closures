

export const index = 15;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/cube8/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/15.a13dfe56.js","_app/immutable/chunks/scheduler.1f6706a1.js","_app/immutable/chunks/index.2d48075f.js"];
export const stylesheets = ["_app/immutable/assets/15.c3c38d65.css"];
export const fonts = [];
