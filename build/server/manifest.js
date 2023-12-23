const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.668f5594.js","app":"_app/immutable/entry/app.36ba4ed3.js","imports":["_app/immutable/entry/start.668f5594.js","_app/immutable/chunks/scheduler.1f6706a1.js","_app/immutable/chunks/singletons.c4fa27b1.js","_app/immutable/chunks/index.b16b216b.js","_app/immutable/entry/app.36ba4ed3.js","_app/immutable/chunks/scheduler.1f6706a1.js","_app/immutable/chunks/index.2d48075f.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-1f24a174.js')),
			__memo(() => import('./chunks/1-cefb9a37.js')),
			__memo(() => import('./chunks/2-fb401198.js')),
			__memo(() => import('./chunks/3-898ecda0.js')),
			__memo(() => import('./chunks/4-a82cb753.js')),
			__memo(() => import('./chunks/5-416c6100.js')),
			__memo(() => import('./chunks/6-2262430c.js')),
			__memo(() => import('./chunks/7-cc8a242b.js')),
			__memo(() => import('./chunks/8-44ae08e3.js')),
			__memo(() => import('./chunks/9-816fa35e.js')),
			__memo(() => import('./chunks/10-9acd3452.js')),
			__memo(() => import('./chunks/11-a28eb342.js')),
			__memo(() => import('./chunks/12-c7610078.js')),
			__memo(() => import('./chunks/13-a4db0307.js')),
			__memo(() => import('./chunks/14-716eb8ae.js')),
			__memo(() => import('./chunks/15-42f32fbc.js')),
			__memo(() => import('./chunks/16-a7c00364.js')),
			__memo(() => import('./chunks/17-96e5f41f.js')),
			__memo(() => import('./chunks/18-268b3427.js')),
			__memo(() => import('./chunks/19-f0dd8163.js')),
			__memo(() => import('./chunks/20-54c905aa.js')),
			__memo(() => import('./chunks/21-ef73e867.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/Bell-Inequality",
				pattern: /^\/Bell-Inequality\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/Pilot-Wave",
				pattern: /^\/Pilot-Wave\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/Snippets",
				pattern: /^\/Snippets\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/arrays",
				pattern: /^\/arrays\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/async",
				pattern: /^\/async\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/cube1",
				pattern: /^\/cube1\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/cube2",
				pattern: /^\/cube2\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/cube3",
				pattern: /^\/cube3\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/cube4",
				pattern: /^\/cube4\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/cube5",
				pattern: /^\/cube5\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/cube6",
				pattern: /^\/cube6\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/cube7",
				pattern: /^\/cube7\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/cube8",
				pattern: /^\/cube8\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/cube9",
				pattern: /^\/cube9\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/functional",
				pattern: /^\/functional\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/rc1",
				pattern: /^\/rc1\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/rc2",
				pattern: /^\/rc2\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/score",
				pattern: /^\/score\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/trash",
				pattern: /^\/trash\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 21 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

export { manifest };
//# sourceMappingURL=manifest.js.map
