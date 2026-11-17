import react from '@vitejs/plugin-react';
import { loadEnv } from 'vite';
import { defineConfig } from 'vitest/config';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    const target = env.API_URL ?? 'http://localhost:3000';

    return {
        plugins: [react()],
        server: {
            proxy: {
                '/api': {
                    target,
                    rewrite: (path) => path.replace(/^\/api/, ''),
                },
                '/ws': {
                    target,
                    ws: true,
                    rewrite: (path) => path.replace(/^\/ws/, '/stream'),
                },
            },
        },
        test: {
            environment: 'jsdom',
            setupFiles: './src/setupTests.ts',
        },
    };
});
