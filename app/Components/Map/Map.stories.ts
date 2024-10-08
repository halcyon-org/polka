import type { Meta, StoryObj } from "@storybook/react";

import { Map } from "./Map";

type T = typeof Map;

const meta: Meta = {
  title: "Map",
  component: Map,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {};

export default meta;
