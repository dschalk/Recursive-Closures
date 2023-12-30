

export const index = 28;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/websocket/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/28.def81b22.js","_app/immutable/chunks/scheduler.41143b43.js","_app/immutable/chunks/index.a9e5b95b.js"];
export const stylesheets = [];
export const fonts = [];
