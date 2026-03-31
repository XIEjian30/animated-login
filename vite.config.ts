import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,   // 强制使用轮询监听文件变化
    },
    hmr: true,
  },
})