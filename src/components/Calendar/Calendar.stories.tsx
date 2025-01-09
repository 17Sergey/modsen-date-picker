import { Calendar as Component } from "./Calendar";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Component> = {
  component: Component,
  title: "Calendar",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {},
};
