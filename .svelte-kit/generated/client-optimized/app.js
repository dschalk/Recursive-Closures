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
	() => import('./nodes/37')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/Bell-Inequality": [3],
		"/Clones": [4],
		"/Cube2LL": [5],
		"/Intro": [6],
		"/Pilot-Wave": [7],
		"/Snippets": [8],
		"/WebSockets": [9],
		"/arrays": [10],
		"/async2": [12],
		"/async3": [13],
		"/async4": [14],
		"/async5": [15],
		"/async": [11],
		"/cube1": [17],
		"/cube2": [18],
		"/cube3": [19],
		"/cube4": [20],
		"/cube5": [21],
		"/cube6": [22],
		"/cube7": [23],
		"/cube8": [24],
		"/cube9": [25],
		"/cube": [16],
		"/factors": [26],
		"/functional": [27],
		"/matrix": [28],
		"/pagejs": [29],
		"/rc1": [30],
		"/rc2": [31],
		"/score": [32],
		"/sockets": [33],
		"/td": [34],
		"/transformations": [35],
		"/trash": [36],
		"/websocket": [37]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';