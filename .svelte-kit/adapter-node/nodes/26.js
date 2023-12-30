

export const index = 26;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sockets/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/26.3a5058e2.js","_app/immutable/chunks/scheduler.41143b43.js","_app/immutable/chunks/index.a9e5b95b.js"];
export const stylesheets = [];
export const fonts = [];
