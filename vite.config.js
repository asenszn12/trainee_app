import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"
import path from  "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/trainee_app/',

  // use src as a starting directory to other files in different directions
  // resolve is to find the important stuff and alias is to rename it
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
})
