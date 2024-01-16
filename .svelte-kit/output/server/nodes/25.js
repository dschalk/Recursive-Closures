

export const index = 25;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/rc2/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/25.8b515163.js","_app/immutable/chunks/scheduler.41143b43.js","_app/immutable/chunks/index.8cc052f2.js"];
export const stylesheets = ["_app/immutable/assets/25.d93e5661.css"];
export const fonts = [];
