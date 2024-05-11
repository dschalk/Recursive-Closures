export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22'),
	() => import('./nodes/23'),
	() => import('./nodes/24'),
	() => import('./nodes/25'),
	() => import('./nodes/26'),
	() => import('./nodes/27'),
	() => import('./nodes/28'),
	() => import('./nodes/29'),
	() => import('./nodes/30'),
	() => import('./nodes/31'),
	() => import('./nodes/32'),
	() => import('./nodes/33'),
	() => import('./nodes/34'),
	() => import('./nodes/35'),
	() => import('./nodes/36'),
	() => import('./nodes/37'),
	() => import('./nodes/38')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/Bell-Inequality": [3],
		"/Clones": [4],
		"/Cube2LL": [5],
		"/FormTest": [6],
		"/Intro": [7],
		"/Pilot-Wave": [8],
		"/Snippets": [9],
		"/WebSockets": [10],
		"/arrays": [11],
		"/async2": [13],
		"/async3": [14],
		"/async4": [15],
		"/async5": [16],
		"/async": [12],
		"/cube1": [18],
		"/cube2": [19],
		"/cube3": [20],
		"/cube4": [21],
		"/cube5": [22],
		"/cube6": [23],
		"/cube7": [24],
		"/cube8": [25],
		"/cube9": [26],
		"/cube": [17],
		"/factors": [27],
		"/functional": [28],
		"/matrix": [29],
		"/pagejs": [30],
		"/rc1": [31],
		"/rc2": [32],
		"/score": [33],
		"/sockets": [34],
		"/td": [35],
		"/transformations": [36],
		"/trash": [37],
		"/websocket": [38]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';