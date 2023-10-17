import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');
	return {
		plugins: [react()],
		resolve: {
			alias: {
				'@': path.resolve(__dirname, 'src'),
				'@components': path.resolve(__dirname, 'src/components'),
				'@hooks': path.resolve(__dirname, 'src/hooks'),
				'@pages': path.resolve(__dirname, 'src/pages'),
				'@fonts': path.resolve(__dirname, 'src/fonts'),
				'@utils': path.resolve(__dirname, 'src/utils'),
				'@theme': path.resolve(__dirname, 'src/theme'),
				'@constants': path.resolve(__dirname, 'src/constants'),
				'@styles': path.resolve(__dirname, 'src/styles'),
			},
		},
		define: {
			'process.env': env,
		},
	};
});
