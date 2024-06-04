import { v4 as uuid } from 'uuid'

import {
	IDevToolsElement,
} from './InfinityScroll'



export const DevTools: IDevToolsElement[] = [
	{
		id: uuid(),
		name: 'HTML5',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
	},
	{
		id: uuid(),
		name: 'CSS3',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
	},
	{
		id: uuid(),
		name: 'JavaScript',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg',
	},
	/* {
		id: uuid(),
		name: 'TypeScript',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
	}, */
	/* 	{
			id: uuid(),
			name: 'React',
			icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
		}, */
	/* {
		id: uuid(),
		name: 'Next.js',
		icon: 'https://www.svgrepo.com/show/354113/nextjs-icon.svg',
		className: 'dark:invert opacity-70',
	}, */
	{
		id: uuid(),
		name: 'Vite',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg',
	},
	{
		id: uuid(),
		name: 'Tailwind CSS',
		icon: 'https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg',
	},


]