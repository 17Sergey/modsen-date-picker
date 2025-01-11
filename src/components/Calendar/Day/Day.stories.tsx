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
    day: 9,
  },
};

export const FromDifferentMonth: Story = {
  args: {
    day: 9,
    isFromDifferentMonth: true,
  },
};

export const Holiday: Story = {
  args: {
    day: 9,
    isHoliday: true,
  },
};

export const Selected: Story = {
  args: {
    day: 9,
    isSelected: true,
  },
};

export const Today: Story = {
  args: {
    day: 9,
    isToday: true,
  },
};

export const Weekend: Story = {
  args: {
    day: 9,
    isWeekend: true,
  },
};
