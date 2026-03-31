import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/animated-login/',           // ← 这行必须有，且仓库名小写
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})