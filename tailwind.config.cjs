/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: ['class', '[data-theme="dark"]'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Mulish Variable', ...defaultTheme.fontFamily.sans],
			},
		},
		container: {
			center: true,
			padding: '3rem',
		},
	},
	plugins: [],
}
