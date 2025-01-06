import { Counter } from "./Counter";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Counter> = {
  component: Counter,
  title: "Counter",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Counter>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};
