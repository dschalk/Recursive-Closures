

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.F0dUZF4O.js","_app/immutable/chunks/scheduler.AXDefEgt.js","_app/immutable/chunks/index.XvZcArn_.js"];
export const stylesheets = ["_app/immutable/assets/0.VdbHIO46.css"];
export const fonts = [];
