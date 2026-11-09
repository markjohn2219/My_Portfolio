import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/My_Portfolio/', // Siguraduhing may leading at trailing slashes at tama ang capital 'M' at 'P'
})
