

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Intro/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.qdgfxkr_.js","_app/immutable/chunks/scheduler.AXDefEgt.js","_app/immutable/chunks/index.XvZcArn_.js"];
export const stylesheets = ["_app/immutable/assets/5.ZyQSbxGQ.css"];
export const fonts = [];
