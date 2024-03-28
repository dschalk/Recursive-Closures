

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/cube/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.4wXb9z1p.js","_app/immutable/chunks/scheduler.gYNbTIBg.js","_app/immutable/chunks/index.pqPhgd5I.js","_app/immutable/chunks/clickDemo.IW8bSF4A.js","_app/immutable/chunks/function.PuFy-OYx.js"];
export const stylesheets = ["_app/immutable/assets/5.vQ9HYB_7.css"];
export const fonts = [];
