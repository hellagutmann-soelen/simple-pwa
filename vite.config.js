import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
import { readFileSync } from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePWA({}),
  ],
  build: {
    lib: {
      entry: 'src/main.js',
      formats: ['es']
    },
    rollupOptions: {
      // external: /^lit/
    }
  }
})
