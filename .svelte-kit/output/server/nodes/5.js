

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Snippets/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.88a1c269.js","_app/immutable/chunks/scheduler.41143b43.js","_app/immutable/chunks/index.8cc052f2.js"];
export const stylesheets = [];
export const fonts = [];
