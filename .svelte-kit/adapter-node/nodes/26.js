

export const index = 26;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/score/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/26.26710127.js","_app/immutable/chunks/scheduler.41143b43.js","_app/immutable/chunks/index.8cc052f2.js","_app/immutable/chunks/index.8a403549.js"];
export const stylesheets = ["_app/immutable/assets/26.f55f5d96.css"];
export const fonts = [];