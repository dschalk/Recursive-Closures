

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Snippets/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.9e3cc8b7.js","_app/immutable/chunks/scheduler.1f6706a1.js","_app/immutable/chunks/index.2d48075f.js"];
export const stylesheets = [];
export const fonts = [];
