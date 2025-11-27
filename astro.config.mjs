// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import catppuccin from "@catppuccin/starlight";
import starlightKbd from 'starlight-kbd';
import starlightAutoSidebar from 'starlight-auto-sidebar';

import luxeGrammar from "./src/grammars/luxe.tmLanguage.json";
import yarnGrammar from "./src/grammars/yarnspinner.tmLanguage.json";
//This is used for versioning the documentation, you set this to the version for the given branch
import { version_path } from './version-path.mjs';

// https://astro.build/config
export default defineConfig({
	// outDir: `./${version_path}`,
	markdown: {
		shikiConfig: {
			langs: [
				{
					...luxeGrammar,
					aliases: ["lx", "wren"],
				},
				{
					...yarnGrammar,
					aliases: ["yarn"],
				}
			]
		},
	},	
	integrations: [
		starlight({
			title: 'luxe docs',
			head: [
				{
					tag: 'script',
					attrs: {
						// Tweaks to the script URL or attributes can be made here.
						src: 'https://stats.anypercent.studio/script.js',
						'data-website-id': 'f606ae51-5dc7-4613-81c9-40201fc7451b',
						defer: true,
					},
				},
			],
			expressiveCode: {
				useStarlightDarkModeSwitch: true,
				useStarlightUiThemeColors: true,
				themes: ['catppuccin-frappe', 'catppuccin-latte']
			},
			logo: { src: './src/assets/image/luxe-dark.svg', },
			customCss: ['./src/custom.css' ],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Welcome',
					autogenerate: { directory: 'welcome' },
				},
				{
					label: 'Getting Started',
					autogenerate: { directory: 'getting-started' },
				},
				{
					label: 'Tutorials',
					autogenerate: { directory: 'tutorials' },
				},
				{
					label: 'Manual',
					autogenerate: { directory: 'manual' },
				},
				{
					label: 'API reference',
					link: "https://api.luxeengine.com/"
				},
			],
			plugins: [
				starlightAutoSidebar(),
				catppuccin({
					dark: { flavor: "macchiato", accent: "mauve" },
					light: { flavor: "latte", accent: "pink" }
				}),
				starlightKbd({
					types: [
						{ id: 'default', label: 'Default Keys', default: true  },
						{ id: 'windows', label: 'Windows'  },
						{ id: 'mac', label: 'macOS' },
					],
				}),
			]
		}),
		
	],
	vite: {
		resolve: {
			alias: {
				'@': new URL('./src', import.meta.url).pathname,
				'@components': new URL('./src/components', import.meta.url).pathname,
			},
		},
	},
});
