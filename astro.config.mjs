// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import catppuccin from "@catppuccin/starlight";
import starlightKbd from 'starlight-kbd';
// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'luxe game engine',
			logo: {
				src: './src/assets/image/luxe-dark.svg',
			},
			customCss: [
				'./src/custom.css',
			],
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
					label: 'Game Tutorials',
					autogenerate: { directory: 'tutorials-games' },
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
				catppuccin(),
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
});
