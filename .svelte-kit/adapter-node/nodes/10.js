

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/cube3/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.4c164e7d.js","_app/immutable/chunks/scheduler.1f6706a1.js","_app/immutable/chunks/index.2d48075f.js"];
export const stylesheets = ["_app/immutable/assets/10.bf6005c8.css"];
export const fonts = [];
