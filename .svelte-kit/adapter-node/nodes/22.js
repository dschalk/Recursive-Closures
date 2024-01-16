

export const index = 22;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/factors/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/22.92b60bde.js","_app/immutable/chunks/scheduler.41143b43.js","_app/immutable/chunks/index.8cc052f2.js","_app/immutable/chunks/index.9abb7534.js"];
export const stylesheets = ["_app/immutable/assets/22.45f6b360.css"];
export const fonts = [];
