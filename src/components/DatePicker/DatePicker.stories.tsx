import { DatePicker as Component } from "./DatePicker";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Component> = {
  component: Component,
  title: "DatePicker",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {},
};
