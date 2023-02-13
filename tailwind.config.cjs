/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			white: '#ffffff',
			black: {
				primary: '#141827',
				secondary: '#0D1333',
			},
			gray: {
				primary: '#BBBCC1',
				secondary: '#D8D9DC',
				light: '#F9F9F9',
			},
			green: {
				primary: '#70CD62',
				secondary: '#7CDA6C',
			},
			blue: {
				primary: '#4C96FF',
				secondary: '#8FBDFF',
			},
			red: {
				primary: '#FF978E',
				secondary: '#FF7468',
			},
			yellow: {
				primary: '#FCCE68',
				secondary: '#FFEBAB',
			},
			purple: {
				primary: '#8775F5',
				secondary: '#A99CF8',
			},
		},
	},
	plugins: [],
}
