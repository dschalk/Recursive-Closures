

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/async4/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.e9c1c920.js","_app/immutable/chunks/scheduler.41143b43.js","_app/immutable/chunks/index.a9e5b95b.js","_app/immutable/chunks/index.9abb7534.js"];
export const stylesheets = [];
export const fonts = [];
