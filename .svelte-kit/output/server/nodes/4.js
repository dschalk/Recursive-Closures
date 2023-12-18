

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Pilot-Wave/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.f9e4186d.js","_app/immutable/chunks/scheduler.1f6706a1.js","_app/immutable/chunks/index.2d48075f.js"];
export const stylesheets = ["_app/immutable/assets/3.c5b90dae.css"];
export const fonts = [];
