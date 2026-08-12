import fs from "node:fs";
import path from "node:path";

/**
 * Vite plugin that generates a JSON manifest of valid Vue routes from the
 * pages directory on every build (including each rebuild pass under
 * `vite build --watch`).
 *
 * Django uses the manifest to return a proper 404 HTTP status code for unknown
 * routes while still serving the SPA shell.
 *
 * Note: picking up newly added/removed pages under `vite build --watch` also
 * requires restarting the whole Vite process, since vue-router's file-based
 * routing plugin only scans app_name_vue/pages once per process lifetime in
 * watch mode. See tools/watch-with-restart.js, used by `npm run watch`,
 * which handles that restart.
 *
 * @param {object} options
 * @param {string} options.pagesDir - Path to the pages directory
 * @param {string} options.outputPath - Where to write the manifest JSON
 */
export default function vueRouteManifest({ pagesDir, outputPath }) {
  return {
    name: "vue-route-manifest",

    writeBundle() {
      const routes = [];
      walkPages(pagesDir, "", routes);
      fs.mkdirSync(path.dirname(outputPath), { recursive: true });
      fs.writeFileSync(outputPath, JSON.stringify({ routes }, null, 2));
      console.log(
        `[vue-route-manifest] Generated ${routes.length} routes → ${outputPath}`
      );
    },
  };
}

/**
 * Recursively walk the pages directory and build route patterns
 * following unplugin-vue-router file-based conventions:
 *   index.vue       → /
 *   about.vue       → /about
 *   users/[id].vue  → /users/:id
 *   [...404].vue    → catch-all (skipped)
 */
function walkPages(dir, prefix, routes) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    // Skip __tests__ and hidden directories
    if (entry.name.startsWith("__") || entry.name.startsWith(".")) continue;

    if (entry.isDirectory()) {
      const dirName = convertSegment(entry.name);
      walkPages(path.join(dir, entry.name), `${prefix}/${dirName}`, routes);
    } else if (entry.name.endsWith(".vue")) {
      const baseName = entry.name.replace(".vue", "");

      // Skip catch-all routes (e.g., [...404].vue, [...all].vue)
      if (baseName.startsWith("[...")) continue;

      if (baseName === "index") {
        routes.push(prefix || "/");
      } else {
        const segment = convertSegment(baseName);
        routes.push(`${prefix}/${segment}`);
      }
    }
  }
}

/**
 * Convert a file/directory name to a route segment.
 * [param] → :param (dynamic segment)
 */
function convertSegment(name) {
  return name.replace(/\[(\w+)\]/g, ":$1");
}
