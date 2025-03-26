import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/my-portfolio/", // Set base for GitHub Pages deployment
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
  publicDir: 'public', // Ensure public directory is configured
  assetsInclude: ['**/*.mp4', '**/*.mov'], // Add support for video files
});
