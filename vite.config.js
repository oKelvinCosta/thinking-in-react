import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: './', // Base path of project
  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory
  },
})
