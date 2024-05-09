

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.4N0DKgo1.js","_app/immutable/chunks/scheduler.PqqiGW0i.js","_app/immutable/chunks/index.McjGVyOV.js","_app/immutable/chunks/Cubeshot.qQhsNkrP.js"];
export const stylesheets = ["_app/immutable/assets/2.I9nePEkH.css"];
export const fonts = [];
