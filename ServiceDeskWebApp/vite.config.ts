import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({ babel: { plugins: ['effector/babel-plugin'] } })],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
