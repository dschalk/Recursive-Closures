

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/cube/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.q8Olujfz.js","_app/immutable/chunks/scheduler.gYNbTIBg.js","_app/immutable/chunks/index.pqPhgd5I.js","_app/immutable/chunks/clickDemo.IW8bSF4A.js","_app/immutable/chunks/function.PuFy-OYx.js"];
export const stylesheets = ["_app/immutable/assets/5.tHQ0lizM.css"];
export const fonts = [];
