

export const index = 21;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/trash/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/21.124b2ff2.js","_app/immutable/chunks/scheduler.1f6706a1.js","_app/immutable/chunks/index.2d48075f.js"];
export const stylesheets = ["_app/immutable/assets/10.bf6005c8.css"];
export const fonts = [];
