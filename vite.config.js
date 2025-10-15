import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base:'https://lBenjaminOrtegal.github.io/Utilidades-Web',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // ESTA LÍNEA ES LA CLAVE
    },
  },
})
