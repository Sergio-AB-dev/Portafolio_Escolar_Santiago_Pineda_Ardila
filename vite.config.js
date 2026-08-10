import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Portafolio_Escolar_Santiago_Pineda_Ardila', // <-- Pon el nombre de tu repositorio aquí
})