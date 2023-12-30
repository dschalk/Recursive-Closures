

export const index = 22;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/functional/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/22.02a5208f.js","_app/immutable/chunks/scheduler.41143b43.js","_app/immutable/chunks/index.a9e5b95b.js"];
export const stylesheets = [];
export const fonts = [];
