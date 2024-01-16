

export const index = 15;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/cube3/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/15.b73b95ca.js","_app/immutable/chunks/scheduler.41143b43.js","_app/immutable/chunks/index.8cc052f2.js"];
export const stylesheets = ["_app/immutable/assets/15.bf6005c8.css"];
export const fonts = [];
