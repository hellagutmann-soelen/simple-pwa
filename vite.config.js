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
      manifest: {
        name: "simple-pwa",
        short_name: "Simple PWA",
        start_url: ".",
        display: "standalone",
        background_color: "#00783e",
        theme_color: "#00783e",
        description: "A small example to show how to simple pwa.",
        icons: [
          {
            src: "favicon/favicon_512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any"
          }, {
            src: "favicon/favicon.svg",
            sizes: "any",
            type: "image/svg+xml",
            purpose: "any"
          }, {
            src: "favicon/maskable_512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable"
          }, {
            src: "favicon/maskable.svg",
            sizes: "any",
            type: "image/svg+xml",
            purpose: "maskable"
          }, {
            src: "favicon/monochrome_256.png",
            sizes: "256x256",
            type: "image/png",
            purpose: "monochrome"
          }
        ]
      },
      workbox: {
        globPatterns: [ '**/*.{js,css,html,svg,png,mp3}' ],
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
