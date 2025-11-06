import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import alpinejs from '@astrojs/alpinejs'
import mdx from '@astrojs/mdx'
import remarkPlugin1 from 'remark-toc'
// import rehypeMinify from 'rehype-minify-html'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://maiobarbero.dev',
  base: '/',
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
      // rehypePlugins: [rehypeMinify],
    }),
    sitemap({
      customPages:["https://maiobarbero.dev/_astro/Matteo_Barbero.pdf"]
    }),
  ],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
})
