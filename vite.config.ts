import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { Mode, plugin } from 'vite-plugin-markdown';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), plugin({ mode: [Mode.HTML] })]
})
