import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
import { readFileSync, writeFileSync } from 'fs';
import { parse } from 'node-html-parser';

// Update body content in public/index.html
const root = parse( readFileSync( './index.html') );
const publicRoot = parse( readFileSync( './public/index.html' ) );
publicRoot.querySelector( 'body' ).innerHTML = root.querySelector( 'body' )
  .childNodes.join( '' )
  .toString()
  .replaceAll( 'public/', '' );
writeFileSync( './public/index.html', publicRoot.toString() );

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePWA({
      workbox: {
        globPatterns: [ '**/*.{js,css,html,svg,png}' ],
      }
    }),
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
