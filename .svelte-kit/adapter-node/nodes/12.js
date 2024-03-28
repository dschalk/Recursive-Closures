

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/pagejs/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/12.YmZ1v3Ax.js","_app/immutable/chunks/scheduler.gYNbTIBg.js","_app/immutable/chunks/index.pqPhgd5I.js"];
export const stylesheets = [];
export const fonts = [];
