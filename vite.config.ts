import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/my-portfolio/", // Correct GitHub Pages base path
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  resolve: {
    alias: {
      '@': '/src', // Path alias for cleaner imports
      '@emailjs/browser': '@emailjs/browser'
    }
  },
  publicDir: 'public',
  assetsInclude: ['**/*.mp4', '**/*.mov'], // Add support for video files
});
