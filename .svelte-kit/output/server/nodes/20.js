

export const index = 20;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/score/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/20.a07ead93.js","_app/immutable/chunks/scheduler.1f6706a1.js","_app/immutable/chunks/index.2d48075f.js","_app/immutable/chunks/index.b16b216b.js"];
export const stylesheets = ["_app/immutable/assets/20.f55f5d96.css"];
export const fonts = [];
