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
		client: {"start":"_app/immutable/entry/start.f64d4c44.js","app":"_app/immutable/entry/app.4a7ddda1.js","imports":["_app/immutable/entry/start.f64d4c44.js","_app/immutable/chunks/scheduler.41143b43.js","_app/immutable/chunks/singletons.474fd35b.js","_app/immutable/chunks/index.8a403549.js","_app/immutable/entry/app.4a7ddda1.js","_app/immutable/chunks/scheduler.41143b43.js","_app/immutable/chunks/index.a9e5b95b.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-c9eafec7.js')),
			__memo(() => import('./chunks/1-a1148547.js')),
			__memo(() => import('./chunks/2-4c950d3b.js')),
			__memo(() => import('./chunks/3-6d5f2656.js')),
			__memo(() => import('./chunks/4-d8b09ced.js')),
			__memo(() => import('./chunks/5-99762c3b.js')),
			__memo(() => import('./chunks/6-28c1b8ce.js')),
			__memo(() => import('./chunks/7-2cb92c68.js')),
			__memo(() => import('./chunks/8-fa6f5bdd.js')),
			__memo(() => import('./chunks/9-8c7a3ac0.js')),
			__memo(() => import('./chunks/10-e8f7a1f6.js')),
			__memo(() => import('./chunks/11-57718aa9.js')),
			__memo(() => import('./chunks/12-d303485f.js')),
			__memo(() => import('./chunks/13-8e94b31f.js')),
			__memo(() => import('./chunks/14-cedbd932.js')),
			__memo(() => import('./chunks/15-74de7fae.js')),
			__memo(() => import('./chunks/16-4fc878fb.js')),
			__memo(() => import('./chunks/17-43210f13.js')),
			__memo(() => import('./chunks/18-50ae31ad.js')),
			__memo(() => import('./chunks/19-2d685c84.js')),
			__memo(() => import('./chunks/20-1349a507.js')),
			__memo(() => import('./chunks/21-8c8a5bfa.js')),
			__memo(() => import('./chunks/22-a0038052.js')),
			__memo(() => import('./chunks/23-e249f1f5.js')),
			__memo(() => import('./chunks/24-e933f4f7.js')),
			__memo(() => import('./chunks/25-3d3fe3d8.js')),
			__memo(() => import('./chunks/26-d5baff15.js')),
			__memo(() => import('./chunks/27-eebc9d32.js')),
			__memo(() => import('./chunks/28-ff46d63e.js'))
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
				id: "/async2",
				pattern: /^\/async2\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/async3",
				pattern: /^\/async3\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/async4",
				pattern: /^\/async4\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/async5",
				pattern: /^\/async5\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
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
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/cube2",
				pattern: /^\/cube2\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/cube3",
				pattern: /^\/cube3\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/cube4",
				pattern: /^\/cube4\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/cube5",
				pattern: /^\/cube5\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/cube6",
				pattern: /^\/cube6\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/cube7",
				pattern: /^\/cube7\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/cube8",
				pattern: /^\/cube8\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/cube9",
				pattern: /^\/cube9\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/factors",
				pattern: /^\/factors\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/functional",
				pattern: /^\/functional\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/rc1",
				pattern: /^\/rc1\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/rc2",
				pattern: /^\/rc2\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/score",
				pattern: /^\/score\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/sockets",
				pattern: /^\/sockets\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/trash",
				pattern: /^\/trash\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 27 },
				endpoint: null
			},
			{
				id: "/websocket",
				pattern: /^\/websocket\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 28 },
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
