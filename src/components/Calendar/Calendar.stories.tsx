import withHolidays from "@decorators/withHolidays";
import withClearButton from "@decorators/withHolidays copy";

import { Calendar, Calendar as Component } from "./Calendar";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Component> = {
  component: Component,
  title: "Calendar",
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
      console.log("Selected date:", date);
    },
  },
};

const WithHolidaysCalendar = withHolidays(Calendar);

export const WithHolidays: Story = {
  render: () => <WithHolidaysCalendar />,
};

const WithClearButtonCalendar = withClearButton(Calendar);

export const WithClearButton: Story = {
  render: () => <WithClearButtonCalendar />,
};

export const WithTodos: Story = {
  args: {
    initialDate: new Date(),
    onDateSelect: (date: Date) => {
      console.log("Selected date:", date);
    },
    withTodos: true,
  },
};
