

export const index = 27;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/trash/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/27.da964a2e.js","_app/immutable/chunks/scheduler.41143b43.js","_app/immutable/chunks/index.a9e5b95b.js"];
export const stylesheets = ["_app/immutable/assets/14.bf6005c8.css"];
export const fonts = [];
