

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Bell-Inequality/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.29fe8ab4.js","_app/immutable/chunks/scheduler.41143b43.js","_app/immutable/chunks/index.8cc052f2.js"];
export const stylesheets = ["_app/immutable/assets/3.c5b90dae.css"];
export const fonts = [];
