import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Keeps file paths as written, which avoids issues in redirected Windows folders
  resolve: { preserveSymlinks: true },
})
