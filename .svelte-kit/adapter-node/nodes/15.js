

export const index = 15;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/cube4/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/15.cb36238b.js","_app/immutable/chunks/scheduler.41143b43.js","_app/immutable/chunks/index.a9e5b95b.js"];
export const stylesheets = ["_app/immutable/assets/15.8c3f7f5f.css"];
export const fonts = [];
