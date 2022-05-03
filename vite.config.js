import { defineConfig } from "vite";
import { fileURLToPath, URL } from "url";
import Vue from "@vitejs/plugin-vue";


// https://vitejs.dev/config/
export default defineConfig({
  build: {
    manifest: true,
    rollupOptions: {
      input: [
        // list all entry points
        './app_name_vue/main.js',
      ]
    },
    outDir: './app_name/static/app_name/',
    // assetsDir: 'bundles', // default is 'assets'
    //emptyOutDir: true
  },
  base: "/static/app_name/",
  // root: "./app_name_vue",
  plugins: [Vue(),],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./app_name_vue", import.meta.url)),
    },
  },
});
