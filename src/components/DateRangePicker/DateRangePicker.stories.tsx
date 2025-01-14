import { TODAY } from "@constants/constants";

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
    rangeStart: new Date(2025, 0, 16),
    rangeEnd: TODAY,
    withRangePicker: true,

    onDateSelect: (date: Date) => {
      console.log("Selected date:", date.toJSON());
    },
    onRangeStartSelect: (date: Date) => {
      console.log("Range start date:", date.toJSON());
    },
    onRangeEndSelect: (date: Date) => {
      console.log("Range end date:", date.toJSON());
    },
  },
};
