

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.eb0f7ebd.js","_app/immutable/chunks/scheduler.1f6706a1.js","_app/immutable/chunks/index.2d48075f.js"];
export const stylesheets = ["_app/immutable/assets/2.3f65f80d.css"];
export const fonts = [];