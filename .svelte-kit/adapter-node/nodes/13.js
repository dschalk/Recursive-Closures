

export const index = 13;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/cube2/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/13.ee86b6c6.js","_app/immutable/chunks/scheduler.41143b43.js","_app/immutable/chunks/index.a9e5b95b.js"];
export const stylesheets = ["_app/immutable/assets/12.c9623578.css"];
export const fonts = [];
