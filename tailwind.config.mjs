/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				bg_color: '#212934',
				font_color: '#222222',
				nav_link_color: '#212934',
				custom_red: '#bd162d',
				custom_blue: '#2364c4',
				custom_grey: '#666666',
				custom_dark_blue: '#081b36',
				custom_pink: '#c13584'
			}
		},
	},
	plugins: [],
}
