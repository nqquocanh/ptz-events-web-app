import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
import path from "path";

export default defineConfig({
  plugins: [createVuePlugin()],
  optimizeDeps: {
    include: ["bootstrap-vue", "lodash.startcase"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
