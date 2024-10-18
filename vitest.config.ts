import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";
import typecript from "vite-tsconfig-paths";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig({
  plugins: [react(), typecript(), vanillaExtractPlugin()],
  test: {
    environment: "jsdom",
    globals: true,
    root: "app",
  },
});
