

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Bell-Inequality/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.f44728eb.js","_app/immutable/chunks/scheduler.1f6706a1.js","_app/immutable/chunks/index.2d48075f.js"];
export const stylesheets = ["_app/immutable/assets/3.c5b90dae.css"];
export const fonts = [];
