import type { ConfigEnv, UserConfig } from 'vite';

import path from 'node:path';
import react from '@vitejs/plugin-react-swc';
import UnoCSS from 'unocss/vite';
import { defineConfig, loadEnv } from 'vite';

// https://vite.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  // eslint-disable-next-line node/prefer-global/process
  const env = loadEnv(mode, process.cwd());
  const port = env.VITE_PORT || 2974;

  return {
    plugins: [react(), UnoCSS()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      host: '0.0.0.0',
      port: +port,
      open: true,
      proxy: {
        // 代理 /dev-api 的请求
        [env.VITE_API]: {
          changeOrigin: true,
          target: env.VITE_API_URL,
        },
      },
    },
  };
});
