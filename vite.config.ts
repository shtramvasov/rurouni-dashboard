import eslint from '@rollup/plugin-eslint'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [
		{ ...eslint({ include: 'src/**/*.+(js|jsx|ts|tsx)' }), enforce: 'pre' },
		react(),
	],
})
