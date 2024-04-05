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
	() => import('./nodes/35')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/Bell-Inequality": [3],
		"/Cube2LL": [4],
		"/Intro": [5],
		"/Pilot-Wave": [6],
		"/Snippets": [7],
		"/WebSockets": [8],
		"/arrays": [9],
		"/async2": [11],
		"/async3": [12],
		"/async4": [13],
		"/async5": [14],
		"/async": [10],
		"/cube1": [16],
		"/cube2": [17],
		"/cube3": [18],
		"/cube4": [19],
		"/cube5": [20],
		"/cube6": [21],
		"/cube7": [22],
		"/cube8": [23],
		"/cube9": [24],
		"/cube": [15],
		"/factors": [25],
		"/functional": [26],
		"/matrix": [27],
		"/pagejs": [28],
		"/rc1": [29],
		"/rc2": [30],
		"/score": [31],
		"/sockets": [32],
		"/transformations": [33],
		"/trash": [34],
		"/websocket": [35]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';