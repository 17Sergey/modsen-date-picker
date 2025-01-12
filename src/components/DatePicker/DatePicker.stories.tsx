import { DatePicker as Component } from "./DatePicker";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Component> = {
  component: Component,
  title: "DatePicker",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "250px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {
    dateSelected: new Date(2025, 0, 13),
    onDateSelect: (date: Date) => {
      console.log("Selected date:", date.toJSON());
    },
  },
};
