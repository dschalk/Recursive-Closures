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
		client: {"start":"_app/immutable/entry/start.4998a032.js","app":"_app/immutable/entry/app.6e4ba7c6.js","imports":["_app/immutable/entry/start.4998a032.js","_app/immutable/chunks/scheduler.1f6706a1.js","_app/immutable/chunks/singletons.f7531428.js","_app/immutable/chunks/index.b16b216b.js","_app/immutable/entry/app.6e4ba7c6.js","_app/immutable/chunks/scheduler.1f6706a1.js","_app/immutable/chunks/index.2d48075f.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-bd197106.js')),
			__memo(() => import('./chunks/1-c999962b.js')),
			__memo(() => import('./chunks/2-22f943b0.js')),
			__memo(() => import('./chunks/3-704eac90.js')),
			__memo(() => import('./chunks/4-6fdb816d.js')),
			__memo(() => import('./chunks/5-bc41da44.js')),
			__memo(() => import('./chunks/6-16cf5fdf.js')),
			__memo(() => import('./chunks/7-0e46096b.js')),
			__memo(() => import('./chunks/8-32307cc1.js')),
			__memo(() => import('./chunks/9-6f0b2e62.js')),
			__memo(() => import('./chunks/10-33db2da3.js')),
			__memo(() => import('./chunks/11-c81da57c.js')),
			__memo(() => import('./chunks/12-d8d0150f.js')),
			__memo(() => import('./chunks/13-9775da99.js')),
			__memo(() => import('./chunks/14-6416c11c.js')),
			__memo(() => import('./chunks/15-75307a43.js')),
			__memo(() => import('./chunks/16-a52b0a68.js')),
			__memo(() => import('./chunks/17-08d064f8.js')),
			__memo(() => import('./chunks/18-9a068262.js')),
			__memo(() => import('./chunks/19-04d1d014.js')),
			__memo(() => import('./chunks/20-fbf0d53d.js'))
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
				id: "/functional",
				pattern: /^\/functional\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/rc1",
				pattern: /^\/rc1\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/rc2",
				pattern: /^\/rc2\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/score",
				pattern: /^\/score\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/trash",
				pattern: /^\/trash\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 20 },
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
