import type { Meta, StoryObj } from "@storybook/react";

import { layer } from "./layer";

type T = typeof layer;

const meta: Meta = {
  title: "layer",
  component: layer,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {};

export default meta;
