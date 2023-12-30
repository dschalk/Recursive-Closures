

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/async/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.f2067df2.js","_app/immutable/chunks/scheduler.41143b43.js","_app/immutable/chunks/index.a9e5b95b.js"];
export const stylesheets = ["_app/immutable/assets/7.5334752a.css"];
export const fonts = [];
