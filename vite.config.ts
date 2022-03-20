import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
  server: {
    port: 3001,
    open: true,
    proxy: { 
      '/api': {
        target: 'http://127.0.0.1:3000/',
        changeOrigin: true,
        secure: false,
      },

      }
  }
});
