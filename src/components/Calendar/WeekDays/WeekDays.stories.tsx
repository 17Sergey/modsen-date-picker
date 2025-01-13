import { WEEK_DAYS_FROM_MONDAY } from "@constants/calendar";

import { WeekDays as Component } from "./WeekDays";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Component> = {
  component: Component,
  title: "WeekDays",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {
    weekDays: WEEK_DAYS_FROM_MONDAY,
  },
};
