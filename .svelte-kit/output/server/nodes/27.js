

export const index = 27;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sockets/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/27.afe6c713.js","_app/immutable/chunks/scheduler.41143b43.js","_app/immutable/chunks/index.8cc052f2.js"];
export const stylesheets = [];
export const fonts = [];