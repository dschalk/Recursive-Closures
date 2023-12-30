

export const index = 21;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/factors/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/21.b6cf475e.js","_app/immutable/chunks/scheduler.41143b43.js","_app/immutable/chunks/index.a9e5b95b.js","_app/immutable/chunks/index.9abb7534.js"];
export const stylesheets = ["_app/immutable/assets/21.45f6b360.css"];
export const fonts = [];
