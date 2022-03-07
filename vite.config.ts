import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import nodePolyfills from 'rollup-plugin-polyfill-node';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills({ include: ['buffer', 'readable-stream'] })],
  resolve: {
    alias: {
      // stream: require.resolve('readable-stream'),
    },
  },
  define: {
    'process.env': {},
  },
});
