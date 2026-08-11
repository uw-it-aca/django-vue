import { fileURLToPath, URL } from "node:url";
import Vue from "@vitejs/plugin-vue";
import VueRouter from "vue-router/vite";
import { defineConfig, loadEnv } from "vite";
import vueRouteManifest from "./vite-plugin-vue-route-manifest.js";

// https://vitejs.dev/config/
// Using the function form of defineConfig to access the current mode (development/production)
// and configure environment-dependent options like source maps.
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const isLocalDev = env.ENV === "localdev";

  return {
    build: {
      manifest: true,
      sourcemap: isLocalDev,
      rolldownOptions: {
        input: [
          "./app_name_vue/main.js",
        ],
        output: {
          sourcemapExcludeSources: false,
          // Remove hash from CSS filenames for better Clarity caching
          assetFileNames: (assetInfo) => {
            const prefix = "app_name/assets/";
            const name = assetInfo.names?.[0] ?? "";
            if (name.endsWith(".css")) {
              return `${prefix}[name][extname]`;
            }
            return `${prefix}[name]-[hash][extname]`;
          },
        },
      },
      // Build output goes to Django's static directory.
      // Django collectstatic will serve assets at '/static/app_name/assets/'
      // and the manifest at '/static/.vite/manifest.json'.
      outDir: "./app_name/static/",
      assetsDir: "app_name/assets",
      emptyOutDir: true,
    },
    publicDir: "app_name_vue/public",
    // Base path must match Django's STATIC_URL so CSS url() references resolve correctly
    base: "/static/",

    plugins: [
      VueRouter({
        routesFolder: "app_name_vue/pages",
      }),
      Vue(),
      // Generates a JSON manifest of Vue routes so Django can resolve
      // client-side routes for server-side rendering or URL validation
      vueRouteManifest({
        pagesDir: "app_name_vue/pages",
        outputPath: "app_name/static/app_name/vue-routes.json",
      }),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./app_name_vue", import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true,
          silenceDeprecations: ["global-builtin", "import"],
        },
      },
    },
  };
});
