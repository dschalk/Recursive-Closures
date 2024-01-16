

export const index = 16;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/cube4/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/16.edc6cca3.js","_app/immutable/chunks/scheduler.41143b43.js","_app/immutable/chunks/index.8cc052f2.js"];
export const stylesheets = ["_app/immutable/assets/16.8c3f7f5f.css"];
export const fonts = [];
