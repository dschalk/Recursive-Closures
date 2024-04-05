

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/WebSockets/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.bbMziZXV.js","_app/immutable/chunks/scheduler.AXDefEgt.js","_app/immutable/chunks/index.XvZcArn_.js"];
export const stylesheets = ["_app/immutable/assets/8.U5hdiTZS.css"];
export const fonts = [];
