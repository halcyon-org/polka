import type { Meta, StoryObj } from "@storybook/react";

import Map from "./Map";

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

export const Default: Story = {
  args: {
    center: { lat: 34.8503, lng: 136.582 },
  },
};

export default meta;
