import path from 'path';
import fs from 'fs';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

// get all folders in src folder
const pathes = fs
	.readdirSync(path.resolve(__dirname, 'src'), { withFileTypes: true })
	.filter((dirent) => dirent.isDirectory())
	.map((dirent) => dirent.name);

// get all folders in src folder as alias
const alias = pathes.reduce((acc, cur) => {
	acc[`@${cur}`] = path.resolve(__dirname, `src/${cur}`);
	return acc;
}, {});

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');
	return {
		plugins: [react()],
		resolve: {
			alias,
		},
		define: {
			'process.env': env,
		},
	};
});
