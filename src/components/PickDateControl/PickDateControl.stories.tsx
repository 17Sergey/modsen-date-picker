import { PickDateControl as Component } from "./PickDateControl";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Component> = {
  component: Component,
  title: "PickDateControl",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {},
};
