// astro.config.mjs
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
	site: 'https://alvarofdezr-web.vercel.app',
	integrations: [mdx(), sitemap()],
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'DM Serif Display',
			cssVariable: '--serif',
			fallbacks: ['serif'],
			options: {
				variants: [
					{ src: ['./src/assets/fonts/dm-serif-display-v17-latin-regular.woff2'], weight: 400, style: 'normal' },
					{ src: ['./src/assets/fonts/dm-serif-display-v17-latin-italic.woff2'], weight: 400, style: 'italic' },
				],
			},
		},
		{
			provider: fontProviders.local(),
			name: 'DM Mono',
			cssVariable: '--mono',
			fallbacks: ['monospace'],
			options: {
				variants: [
					{ src: ['./src/assets/fonts/dm-mono-v16-latin-300.woff2'], weight: 300, style: 'normal' },
					{ src: ['./src/assets/fonts/dm-mono-v16-latin-regular.woff2'], weight: 400, style: 'normal' },
					{ src: ['./src/assets/fonts/dm-mono-v16-latin-500.woff2'], weight: 500, style: 'normal' },
				],
			},
		},
	],
});