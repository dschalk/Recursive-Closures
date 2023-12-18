

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/cube1/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.784ad789.js","_app/immutable/chunks/scheduler.1f6706a1.js","_app/immutable/chunks/index.2d48075f.js"];
export const stylesheets = ["_app/immutable/assets/8.c9623578.css"];
export const fonts = [];
