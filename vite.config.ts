import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Remove or update base if you're not deploying to a subdirectory
  // base: '/',  // Changed from '/your-repo-name/'
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  resolve: {
    alias: {
      '@': '/src',  // Add path alias for better imports
      '@emailjs/browser': '@emailjs/browser'
    }
  },
  // Add public directory configuration
  publicDir: 'public',
  assetsInclude: ['**/*.mp4', '**/*.mov'], // Add support for video files
});
