

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Intro/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.WZTuVHaM.js","_app/immutable/chunks/scheduler.gYNbTIBg.js","_app/immutable/chunks/index.pqPhgd5I.js"];
export const stylesheets = ["_app/immutable/assets/3.ZyQSbxGQ.css"];
export const fonts = [];
