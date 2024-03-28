

export const index = 11;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/matrix/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/11.-4zRDSIM.js","_app/immutable/chunks/scheduler.gYNbTIBg.js","_app/immutable/chunks/index.pqPhgd5I.js"];
export const stylesheets = [];
export const fonts = [];
