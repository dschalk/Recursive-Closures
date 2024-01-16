

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.96894b3a.js","_app/immutable/chunks/scheduler.41143b43.js","_app/immutable/chunks/index.8cc052f2.js","_app/immutable/chunks/singletons.869adf81.js","_app/immutable/chunks/index.8a403549.js"];
export const stylesheets = [];
export const fonts = [];
