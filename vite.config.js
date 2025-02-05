import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: './', // Base path of project
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'docs', // Output directory
  },
})
