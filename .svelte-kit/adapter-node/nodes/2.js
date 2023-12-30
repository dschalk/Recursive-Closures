

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.975fb2ef.js","_app/immutable/chunks/scheduler.41143b43.js","_app/immutable/chunks/index.a9e5b95b.js"];
export const stylesheets = ["_app/immutable/assets/2.3f65f80d.css"];
export const fonts = [];
