

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.7026041d.js","_app/immutable/chunks/scheduler.41143b43.js","_app/immutable/chunks/index.a9e5b95b.js","_app/immutable/chunks/singletons.474fd35b.js","_app/immutable/chunks/index.8a403549.js"];
export const stylesheets = [];
export const fonts = [];
