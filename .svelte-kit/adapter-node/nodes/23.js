

export const index = 23;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/rc1/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/23.d000e7db.js","_app/immutable/chunks/scheduler.41143b43.js","_app/immutable/chunks/index.a9e5b95b.js"];
export const stylesheets = ["_app/immutable/assets/23.dabfb0a5.css"];
export const fonts = [];
