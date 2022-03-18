import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import nodePolyfills from 'rollup-plugin-polyfill-node';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // stream: require.resolve('readable-stream'),
    },
  },
  define: {
    'process.env': {},
  },
  build: {
    rollupOptions: {
      plugins: [nodePolyfills({ include: ['buffer', 'readable-stream'] })],
    },
  },
});
