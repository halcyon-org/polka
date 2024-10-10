import type { Meta, StoryObj } from "@storybook/react";

import { Header } from "./Header";
import { createRemixStub } from "@remix-run/testing";

type T = typeof Header;

const meta: Meta = {
  title: "Header",
  component: Header,
  decorators: [
    (story) => {
      const remixStub = createRemixStub([
        {
          Component: () => story(),
          path: "/*",
        },
      ]);

      return remixStub({});
    },
  ],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {};

export default meta;
