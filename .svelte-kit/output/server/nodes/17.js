

export const index = 17;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/functional/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/17.51abc64f.js","_app/immutable/chunks/scheduler.1f6706a1.js","_app/immutable/chunks/index.2d48075f.js"];
export const stylesheets = [];
export const fonts = [];
