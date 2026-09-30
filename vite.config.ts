import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    __UPDATED__: JSON.stringify(
      new Date().toLocaleDateString('en-GB', { month: 'long', year: 'numeric' }),
    ),
  },
  build: {
    target: 'es2020',
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    exclude: ['e2e/**', 'node_modules/**', 'dist/**'],
    css: true,
  },
});
