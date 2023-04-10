import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve, dirname } from 'path';

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [
    vue({
      reactivityTransform: true
    }),
  ],
  base: './',
  resolve: {
    alias: {
      // 縮短專案程式碼中 import 靜態檔案(圖片)的路徑。
      'assets': resolve('src/assets'),
      '@': resolve(__dirname, 'src'),
    }
  },
  // server: {
  //   port: 8080, //npm run dev port
  // }
})
