

export const index = 16;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/cube5/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/16.46b47fa3.js","_app/immutable/chunks/scheduler.41143b43.js","_app/immutable/chunks/index.a9e5b95b.js"];
export const stylesheets = ["_app/immutable/assets/16.14391535.css"];
export const fonts = [];
