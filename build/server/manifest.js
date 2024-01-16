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
		client: {"start":"_app/immutable/entry/start.0979d909.js","app":"_app/immutable/entry/app.ee4816c4.js","imports":["_app/immutable/entry/start.0979d909.js","_app/immutable/chunks/scheduler.41143b43.js","_app/immutable/chunks/singletons.869adf81.js","_app/immutable/chunks/index.8a403549.js","_app/immutable/entry/app.ee4816c4.js","_app/immutable/chunks/scheduler.41143b43.js","_app/immutable/chunks/index.8cc052f2.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-16860c6f.js')),
			__memo(() => import('./chunks/1-e89d20b0.js')),
			__memo(() => import('./chunks/2-dc677e93.js')),
			__memo(() => import('./chunks/3-86dc99a3.js')),
			__memo(() => import('./chunks/4-643f5b59.js')),
			__memo(() => import('./chunks/5-3f8b280c.js')),
			__memo(() => import('./chunks/6-ce4c3333.js')),
			__memo(() => import('./chunks/7-b89f6aed.js')),
			__memo(() => import('./chunks/8-4ac011c5.js')),
			__memo(() => import('./chunks/9-d87df991.js')),
			__memo(() => import('./chunks/10-9104edd1.js')),
			__memo(() => import('./chunks/11-bfa943cd.js')),
			__memo(() => import('./chunks/12-96810f20.js')),
			__memo(() => import('./chunks/13-66baf26e.js')),
			__memo(() => import('./chunks/14-37c67220.js')),
			__memo(() => import('./chunks/15-3a057f10.js')),
			__memo(() => import('./chunks/16-96ab02a5.js')),
			__memo(() => import('./chunks/17-01bc7109.js')),
			__memo(() => import('./chunks/18-52137d9c.js')),
			__memo(() => import('./chunks/19-f1285876.js')),
			__memo(() => import('./chunks/20-def6bdc6.js')),
			__memo(() => import('./chunks/21-d9ac2065.js')),
			__memo(() => import('./chunks/22-2c2f3772.js')),
			__memo(() => import('./chunks/23-8552cf35.js')),
			__memo(() => import('./chunks/24-4fe5a547.js')),
			__memo(() => import('./chunks/25-bd0a8d5f.js')),
			__memo(() => import('./chunks/26-09a2dece.js')),
			__memo(() => import('./chunks/27-599e9c16.js')),
			__memo(() => import('./chunks/28-5038419f.js'))
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
				id: "/WebSockets",
				pattern: /^\/WebSockets\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/arrays",
				pattern: /^\/arrays\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/async2",
				pattern: /^\/async2\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/async3",
				pattern: /^\/async3\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/async4",
				pattern: /^\/async4\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/async5",
				pattern: /^\/async5\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/async",
				pattern: /^\/async\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/cube1",
				pattern: /^\/cube1\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/cube2",
				pattern: /^\/cube2\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/cube3",
				pattern: /^\/cube3\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/cube4",
				pattern: /^\/cube4\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/cube5",
				pattern: /^\/cube5\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/cube6",
				pattern: /^\/cube6\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/cube7",
				pattern: /^\/cube7\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/cube8",
				pattern: /^\/cube8\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/cube9",
				pattern: /^\/cube9\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/factors",
				pattern: /^\/factors\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/functional",
				pattern: /^\/functional\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/rc1",
				pattern: /^\/rc1\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/rc2",
				pattern: /^\/rc2\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/score",
				pattern: /^\/score\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/sockets",
				pattern: /^\/sockets\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 27 },
				endpoint: null
			},
			{
				id: "/trash",
				pattern: /^\/trash\/?$/,
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
