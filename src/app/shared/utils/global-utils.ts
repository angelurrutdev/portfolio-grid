import { v4 as uuid } from 'uuid'

import {
	IDevToolsElement,
	IExperienceCard,
	IProjectCard,
} from '@/app/shared/models/global-interface.ts'

import dd3_bg from '@/assets/dd3_bg.webp'
import dd360 from '@/assets/dd360.webp'
import nolab_bg from '@/assets/nolab_bg.webp'
import nolab from '@/assets/nolab.webp'
import esperanza_bg from '@/assets/esperanza_bg.webp'
import esperanza from '@/assets/esperanza.webp'
import bwl_bg from '@/assets/bwl_bg.webp'
import bwl from '@/assets/bwl.svg'
import protec from '@/assets/protec.webp'
import gpmass_bg from '@/assets/gpmass.webp'


import Spotify from '@/assets/Spotify.webp'
import GuideGit from '@/assets/GuideGit.webp'
import PassImage from '@/assets/PassImage.webp'


export const projects: IProjectCard[] = [

	{
		id: uuid(),
		project_name: 'Spotify Clon Transitions',
		description: 'projects-section.projects.Spotify',
		screenShot: Spotify,
		demoLink: 'https://spotify-clone-transitions.vercel.app/',
		className: 'lg:row-span-3 xl:col-span-4',
		isPrivate: true,
		index: 1,
		technologies: ['React','Astro 4','Tailwind CSS'],
	},
	{
		id: uuid(),
		project_name: 'Guía Git y GitHub',
		description: 'projects-section.projects.GuideGit',
		screenShot: GuideGit,
		demoLink: 'https://git-github-guia.vercel.app/',
		className: 'lg:row-span-3 xl:col-span-4',
		isPrivate: true,
		index: 2,
		technologies: ['Astro 4', 'Tailwind CSS', 'JavaScript'],
	},
	{
		id: uuid(),
		project_name: 'Creador de Contraseñas',
		description: 'projects-section.projects.PasswordGenerator',
		screenShot: PassImage,
		demoLink: 'https://generator-password-five.vercel.app/',
		github: 'https://generator-password-five.vercel.app/',
		className: 'lg:row-span-3 xl:col-span-4',
		isPrivate: true,
		index: 3,
		technologies: ['HTML', 'CSS', 'JavaScript'],
	},
]


export const experiences: IExperienceCard[] = [
	{
		id: uuid(),
		company_logo: protec,
		company_name: 'Protec',
		position_name: 'Front-end Developer Senior',
		dates: 'experience-section.companies.promass.dates',
		url_site: 'https://www.tiprotec.com.mx/',
		background_url: gpmass_bg,
	},
	{
		id: uuid(),
		company_logo: dd360,
		company_name: 'DD360',
		position_name: 'Front-end Developer',
		dates: 'experience-section.companies.DD360.dates',
		url_site: 'https://dd360.mx',
		background_url: dd3_bg,
	},
	{
		id: uuid(),
		company_logo: nolab,
		company_name: 'Nolab',
		position_name: 'FullStack Developer Mid',
		dates: 'experience-section.companies.nolab.dates',
		url_site: 'https://nolab.mx/',
		background_url: nolab_bg,
	},
	{
		id: uuid(),
		company_logo: esperanza,
		company_name: 'Grupo Esperanza',
		position_name: 'Full Stack Developer Jr',
		dates: 'experience-section.companies.esperanza.dates',
		url_site: 'https://esperanza.mx/',
		background_url: esperanza_bg,
	},
	{
		id: uuid(),
		company_logo: bwl,
		company_name: 'BWL',
		position_name: 'Front-end Developer',
		dates: 'experience-section.companies.bwl.dates',
		url_site: 'https://www.bwl.com.mx/',
		background_url: bwl_bg,
	},
]

export const devTools: IDevToolsElement[] = [
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

	{
		id: uuid(),
		name: 'React',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
	},

	{
		id: uuid(),
		name: 'Tailwind CSS',
		icon: 'https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg',
	},

	{
		id: uuid(),
		name: 'Node.js',
		icon: 'https://www.svgrepo.com/show/355140/node.svg',
	},
]
