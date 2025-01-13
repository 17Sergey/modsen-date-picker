import styled from "styled-components";

import { Day as Component } from "./Day";

import type { Meta, StoryObj } from "@storybook/react";

const StyledWrapper = styled.div`
  width: 2.5rem;
`;

const meta: Meta<typeof Component> = {
  component: Component,
  title: "Day",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <StyledWrapper>
        <Story />
      </StyledWrapper>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {
    day: new Date().getDate(),
  },
};

export const FromDifferentMonth: Story = {
  args: {
    day: new Date().getDate(),
    isFromDifferentMonth: true,
  },
};

export const Holiday: Story = {
  args: {
    day: new Date().getDate(),
    isHoliday: true,
  },
};

export const Selected: Story = {
  args: {
    day: new Date().getDate(),
    isSelected: true,
  },
};

export const Today: Story = {
  args: {
    day: new Date().getDate(),
    isToday: true,
  },
};

export const Weekend: Story = {
  args: {
    day: new Date().getDate(),
    isWeekend: true,
  },
};
