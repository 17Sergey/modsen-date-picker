import { Controls as Component } from "./Controls";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Component> = {
  component: Component,
  title: "Controls",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {
    month: "January",
    year: "2025",
  },
};
