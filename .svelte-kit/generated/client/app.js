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
		"/WebSockets": [6],
		"/arrays": [7],
		"/async2": [9],
		"/async3": [10],
		"/async4": [11],
		"/async5": [12],
		"/async": [8],
		"/cube1": [13],
		"/cube2": [14],
		"/cube3": [15],
		"/cube4": [16],
		"/cube5": [17],
		"/cube6": [18],
		"/cube7": [19],
		"/cube8": [20],
		"/cube9": [21],
		"/factors": [22],
		"/functional": [23],
		"/rc1": [24],
		"/rc2": [25],
		"/score": [26],
		"/sockets": [27],
		"/trash": [28]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';