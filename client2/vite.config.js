import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      '/api':{
        target:"https://mern-auth-1-37hu.onrender.com",
        changeOrigin:true,
      }
    }
  }
})
