

export const index = 25;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/score/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/25.7d30d6e2.js","_app/immutable/chunks/scheduler.41143b43.js","_app/immutable/chunks/index.a9e5b95b.js","_app/immutable/chunks/index.8a403549.js"];
export const stylesheets = ["_app/immutable/assets/25.f55f5d96.css"];
export const fonts = [];
