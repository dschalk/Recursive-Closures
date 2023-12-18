

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/cube5/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/12.482f01e4.js","_app/immutable/chunks/scheduler.1f6706a1.js","_app/immutable/chunks/index.2d48075f.js"];
export const stylesheets = ["_app/immutable/assets/12.14391535.css"];
export const fonts = [];
