

export const index = 24;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/rc2/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/24.f99d77a9.js","_app/immutable/chunks/scheduler.41143b43.js","_app/immutable/chunks/index.a9e5b95b.js"];
export const stylesheets = ["_app/immutable/assets/24.d93e5661.css"];
export const fonts = [];
