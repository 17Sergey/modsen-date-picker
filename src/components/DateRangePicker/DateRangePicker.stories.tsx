import { DateRangePicker as Component } from "./DateRangePicker";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Component> = {
  component: Component,
  title: "DateRangePicker",
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
    initialDate: new Date(),
    onDateSelect: (date: Date) => {
      console.log("Selected date:", date.toJSON());
    },
    withRangePicker: true,
  },
};
