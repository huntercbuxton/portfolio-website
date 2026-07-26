import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react()

  ], 
  test: {
    globals: true, // Enables global hooks
    environment: 'jsdom', // Mimics browser
    setupFiles: './src/setupTests.js', // Setup file 
  },
});