

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Intro/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.YzDIMlwp.js","_app/immutable/chunks/scheduler.PqqiGW0i.js","_app/immutable/chunks/index.McjGVyOV.js","_app/immutable/chunks/Cubeshot.qQhsNkrP.js"];
export const stylesheets = ["_app/immutable/assets/6.ZyQSbxGQ.css"];
export const fonts = [];
