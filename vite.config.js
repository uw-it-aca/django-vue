import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({

  // MARK: start vite build config
  build: {
    manifest: true,
    rollupOptions: {
      input: [
        // MARK: list all entry points
        './app_name_vue/main.js',
      ]
    },
    outDir: './app_name/static/', // NOTE: '/static/'
    assetsDir: 'app_name', // NOTE: '/static/app_name/xxxx.js'
    // emptyOutDir: true
  },
  base: "/static/", // MARK: allows for proper css url path creation
  // root: "./app_name_vue",

  // MARK: standard vite/vue plugin and resolver
  plugins: [vue(),],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./app_name_vue", import.meta.url)),
    },
  },
});
