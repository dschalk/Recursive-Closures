

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/async2/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.7a9062f0.js","_app/immutable/chunks/scheduler.41143b43.js","_app/immutable/chunks/index.a9e5b95b.js"];
export const stylesheets = [];
export const fonts = [];
