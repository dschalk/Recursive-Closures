

export const index = 13;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/cube1/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/13.3d81584a.js","_app/immutable/chunks/scheduler.41143b43.js","_app/immutable/chunks/index.8cc052f2.js"];
export const stylesheets = ["_app/immutable/assets/13.c9623578.css"];
export const fonts = [];
