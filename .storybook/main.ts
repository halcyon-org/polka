import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../app/**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  staticDirs: ["../public"],
  viteFinal: async (config) => {
    config.define = {
      ...config.define,
      "process.env.GOOGLE_MAPS_API_KEY": JSON.stringify(
        process.env.GOOGLE_MAPS_API_KEY,
      ),
    };
    return config;
  },
};

export default config;
