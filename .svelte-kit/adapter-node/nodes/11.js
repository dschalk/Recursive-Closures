

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/cube4/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/11.1bf2fd2c.js","_app/immutable/chunks/scheduler.1f6706a1.js","_app/immutable/chunks/index.2d48075f.js"];
export const stylesheets = ["_app/immutable/assets/11.8c3f7f5f.css"];
export const fonts = [];
