

export const index = 16;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/cube9/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/16.964dd485.js","_app/immutable/chunks/scheduler.1f6706a1.js","_app/immutable/chunks/index.2d48075f.js"];
export const stylesheets = [];
export const fonts = [];
