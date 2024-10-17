import type { Meta, StoryObj } from "@storybook/react";
import { ClientAPIKeyInputs } from "./ClientAPIKeyInputs";

type T = typeof ClientAPIKeyInputs;

const meta: Meta = {
  component: ClientAPIKeyInputs,
  decorators: [
    (Story) => (
      <ul>
        <Story />
      </ul>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  title: "ClientAPIKeyInputs",
} satisfies Meta<T>;

type Story = StoryObj<T>;

export const Default: Story = {
  args: {},
};

export default meta;
