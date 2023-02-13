import eslint from '@rollup/plugin-eslint'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [
		{ ...eslint({ include: 'src/**/*.+(js|jsx|ts|tsx)' }), enforce: 'pre' },
		react(),
	],
	resolve: {
		alias: {
			'@pages': path.resolve(__dirname, './src/pages'),
			'@components': path.resolve(__dirname, './src/components'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@services': path.resolve(__dirname, './src/services'),
			'@hooks': path.resolve(__dirname, './src/hooks'),
			'@interfaces': path.resolve(__dirname, './src/interfaces'),
			'@utils': path.resolve(__dirname, './src/utils'),
		},
	},
})
