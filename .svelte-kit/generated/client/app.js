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
	() => import('./nodes/28')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/Bell-Inequality": [3],
		"/Pilot-Wave": [4],
		"/Snippets": [5],
		"/arrays": [6],
		"/async2": [8],
		"/async3": [9],
		"/async4": [10],
		"/async5": [11],
		"/async": [7],
		"/cube1": [12],
		"/cube2": [13],
		"/cube3": [14],
		"/cube4": [15],
		"/cube5": [16],
		"/cube6": [17],
		"/cube7": [18],
		"/cube8": [19],
		"/cube9": [20],
		"/factors": [21],
		"/functional": [22],
		"/rc1": [23],
		"/rc2": [24],
		"/score": [25],
		"/sockets": [26],
		"/trash": [27],
		"/websocket": [28]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';