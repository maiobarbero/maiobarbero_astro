import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import alpinejs from '@astrojs/alpinejs'
import mdx from '@astrojs/mdx'
import remarkPlugin1 from 'remark-toc'
import rehypeMinifyHtml from 'rehype'
import sitemap from '@astrojs/sitemap'

import image from '@astrojs/image'

// https://astro.build/config
export default defineConfig({
	site: 'https://maiobarbero.github.io',
	base: '/maiobarbero_astro',
	integrations: [
		tailwind(),
		alpinejs(),
		mdx({
			syntaxHighlight: 'shiki',
			shikiConfig: {
				theme: 'dracula',
				wrap: true,
			},
			remarkPlugins: [remarkPlugin1],
			rehypePlugins: [rehypeMinifyHtml],
			// optimize: {
			// 	// Prevent the optimizer from handling `h1` elements
			// 	// These will be treated as custom components
			// 	customComponentNames: ['h2'],
			// },
		}),
		sitemap(),
		image({
			serviceEntryPoint: '@astrojs/image/sharp',
		}),
	],
})
