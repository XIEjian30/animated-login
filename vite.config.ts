import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/animated-login/',     // ← 这行对 GitHub Pages 非常重要
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})