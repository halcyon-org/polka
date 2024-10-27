import type { Meta, StoryObj } from "@storybook/react";

import { LayerSelectionButton } from "./LayerSelectionButton";

type T = typeof LayerSelectionButton;

const meta: Meta = {
  title: "Layer Selection Button",
  component: LayerSelectionButton,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {
  args: {
    text: "TextTextText",
    visible: true,
  },
};

export default meta;
