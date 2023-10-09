import { fileURLToPath, URL } from "node:url";

import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";


const BASE_URL = loadEnv("development", process.cwd()).VITE_BASE_URL;
if (!BASE_URL) throw new Error("VITE_BASE_URL is not setted");


// https://vitejs.dev/config/
export default defineConfig({

  plugins: [vue()],
  resolve: {
    alias: {
      "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js",
      "@": "/src",
    },
  },
  base: "/metronic8/vue/demo1/",
  build: {
    target: 'esnext',
    chunkSizeWarningLimit: 3000,
  },
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: BASE_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});

