import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import svgLoader from 'vite-svg-loader' // Import the svgLoader

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    tailwindcss(),
    svgLoader() // Add svgLoader to plugins
  ],
  resolve: { // Add resolve alias for '@'
    alias: {
      '@': '/src'
    }
  },
  build: {
    // Prevent inlining small SVGs so they load as separate files
    assetsInlineLimit: 0
  }
})
