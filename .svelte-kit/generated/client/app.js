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
	() => import('./nodes/21')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/Bell-Inequality": [3],
		"/Pilot-Wave": [4],
		"/Snippets": [5],
		"/arrays": [6],
		"/async": [7],
		"/cube1": [8],
		"/cube2": [9],
		"/cube3": [10],
		"/cube4": [11],
		"/cube5": [12],
		"/cube6": [13],
		"/cube7": [14],
		"/cube8": [15],
		"/cube9": [16],
		"/functional": [17],
		"/rc1": [18],
		"/rc2": [19],
		"/score": [20],
		"/trash": [21]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';