import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'esbuild',  // Asegúrate de que la minimización está habilitada
    target: 'es2015',   // Opcional: Establece el objetivo de ES2015 para compatibilidad
  },
});



