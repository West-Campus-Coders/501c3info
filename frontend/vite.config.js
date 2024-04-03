import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
 
export default defineConfig({
  plugins: [react()],
  build: { chunkSizeWarningLimit: 1600, },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})