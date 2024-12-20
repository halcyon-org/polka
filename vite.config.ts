import {
  vitePlugin as remix,
  cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
} from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import contentCollections from "@content-collections/remix-vite";

const isStorybook = process.argv[1]?.includes("storybook");

export default defineConfig({
  plugins: [
    !isStorybook && remixCloudflareDevProxy(),
    !isStorybook &&
      remix({
        future: {
          v3_fetcherPersist: true,
          v3_relativeSplatPath: true,
          v3_throwAbortReason: true,
        },
      }),
    tsconfigPaths(),
    vanillaExtractPlugin(),
    contentCollections(),
  ],
});
