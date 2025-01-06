import { App as Component } from "./App";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Component> = {
  component: Component,
  title: "App",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};
