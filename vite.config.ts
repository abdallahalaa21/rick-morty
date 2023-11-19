import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@images': path.resolve(__dirname, './src/assets/images'),
      '@colors': path.resolve(__dirname, './src/constant/colors'),
      '@components': path.resolve(__dirname, './src/components'),
      '@graphql': path.resolve(__dirname, './src/graphql'),
    },
  },
  plugins: [react()],
});
