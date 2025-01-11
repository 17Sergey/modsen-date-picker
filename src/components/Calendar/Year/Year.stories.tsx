import { Year as Component } from "./Year";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Component> = {
  component: Component,
  title: "Year",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {
    year: 2025,
  },
};
