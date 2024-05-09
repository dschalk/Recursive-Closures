

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/WebSockets/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/9.AMSlUYzM.js","_app/immutable/chunks/scheduler.PqqiGW0i.js","_app/immutable/chunks/index.McjGVyOV.js"];
export const stylesheets = ["_app/immutable/assets/9.U5hdiTZS.css"];
export const fonts = [];
