

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/async/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.tvFT1gYv.js","_app/immutable/chunks/scheduler.AXDefEgt.js","_app/immutable/chunks/index.XvZcArn_.js"];
export const stylesheets = ["_app/immutable/assets/10.EFi-NPBf.css"];
export const fonts = [];
