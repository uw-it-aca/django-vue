#!/usr/bin/env node
/**
 * Wraps `vite build --watch` and restarts the underlying process whenever a
 * page is added to or removed from app_name_vue/pages.
 *
 * Why this is necessary: vue-router's file-based routing plugin
 * (vue-router/vite, aka unplugin-vue-router) only scans the pages directory
 * once per process lifetime when running under `vite build --watch`. Its
 * internal file watcher is closed on every rebuild's `buildEnd` hook, but the
 * scan is guarded so it never re-runs after the first pass. That means a
 * newly added .vue file never gets bundled or added to the client-side route
 * table, even though this repo's own vite-plugin-vue-route-manifest.js
 * correctly regenerates vue-routes.json on every rebuild.
 *
 * Restarting the whole `vite build --watch` process gives unplugin-vue-router
 * a fresh start, which re-runs its full directory scan and picks up the new
 * (or removed) page.
 */
import { spawn } from "node:child_process";
import path from "node:path";
import { watch } from "chokidar";

const PAGES_DIR = path.resolve("app_name_vue/pages");
const RESTART_DEBOUNCE_MS = 500;

let viteProcess = null;
let restartTimer = null;
let shuttingDown = false;

function startVite() {
  console.log("[watch-with-restart] Starting `vite build --watch`...");
  viteProcess = spawn("vite", ["build", "--watch", "--mode", "development"], {
    stdio: "inherit",
  });

  viteProcess.on("exit", (code, signal) => {
    if (shuttingDown) return;
    // A signal means we killed it intentionally to restart (see
    // restartVite below), which schedules its own respawn.
    if (signal) return;
    console.error(
      `[watch-with-restart] vite exited unexpectedly (code ${code}). Restarting...`
    );
    startVite();
  });
}

function restartVite() {
  if (!viteProcess) {
    startVite();
    return;
  }
  const proc = viteProcess;
  viteProcess = null;
  proc.once("exit", () => startVite());
  proc.kill("SIGTERM");
}

function scheduleRestart(reason) {
  console.log(`[watch-with-restart] ${reason}`);
  if (restartTimer) clearTimeout(restartTimer);
  restartTimer = setTimeout(() => {
    console.log("[watch-with-restart] Restarting vite to rescan pages...");
    restartVite();
  }, RESTART_DEBOUNCE_MS);
}

const watcher = watch(PAGES_DIR, {
  ignoreInitial: true,
  ignored: /(^|[\/\\])(__|\.)/, // ignore __tests__, .hidden
  awaitWriteFinish: { stabilityThreshold: 300 },
  // Native fs events (inotify) frequently don't propagate through Docker
  // bind mounts (notably Docker Desktop on macOS/Windows), so polling is
  // needed to reliably detect changes made on the host from inside the
  // node-bundler container.
  usePolling: true,
  interval: 300,
});

watcher.on("add", (filePath) => {
  if (!filePath.endsWith(".vue")) return;
  scheduleRestart(`Page added: ${path.relative(PAGES_DIR, filePath)}`);
});

watcher.on("unlink", (filePath) => {
  if (!filePath.endsWith(".vue")) return;
  scheduleRestart(`Page removed: ${path.relative(PAGES_DIR, filePath)}`);
});

function shutdown() {
  shuttingDown = true;
  if (restartTimer) clearTimeout(restartTimer);
  watcher.close();
  if (viteProcess) viteProcess.kill("SIGTERM");
  process.exit(0);
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

startVite();
