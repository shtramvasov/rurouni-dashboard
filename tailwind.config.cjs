/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			white: {
				primary: '#FFFFFF',
				light: '#F5F7FB',
			},
			black: {
				primary: '#10192B',
				light: '#243962',
			},
			gray: {
				primary: '#A5AAB6',
				dark: '#8991A0',
				light: '#C0C4CC',
			},
			slate: {
				primary: '#B1BAE6',
				dark: '#8A98DA',
				light: '#DDE1F4',
			},
			green: {
				primary: '#61C86A',
				dark: '#3AA543',
				light: '#9CDDA2',
			},
			blue: {
				primary: '#3866DD',
				dark: '#5A80E3',
				light: '#98B0EE',
			},
			red: {
				primary: '#FF5664',
				dark: '#FF2B3D',
				light: '#FF808B',
			},
			orange: {
				primary: '#FA7D47',
				dark: '#F96A2D',
				light: '#FBA27C',
			},
			yellow: {
				primary: '#FBDC62',
				dark: '#F8C809',
				light: '#FBE27C',
			},
			purple: {
				primary: '#B662FB',
				dark: '#A947FA',
				light: '#CE96FC',
			},
		},
	},
	plugins: [],
}
