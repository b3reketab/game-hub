import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  base: '/game-hub/',
  plugins: [svgr(), react(), tsconfigPaths()],
  server: {
    port: 3000,
  },
})
