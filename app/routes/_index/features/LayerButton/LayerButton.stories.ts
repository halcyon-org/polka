import type { Meta, StoryObj } from "@storybook/react";

import { LayerButton } from "./LayerButton";

type T = typeof LayerButton;

const meta: Meta = {
  title: "Layer Button",
  component: LayerButton,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {};

export default meta;
