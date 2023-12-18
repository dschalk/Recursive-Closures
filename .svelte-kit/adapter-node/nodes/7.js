

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/async/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.c982f410.js","_app/immutable/chunks/scheduler.1f6706a1.js","_app/immutable/chunks/index.2d48075f.js"];
export const stylesheets = ["_app/immutable/assets/7.5334752a.css"];
export const fonts = [];
