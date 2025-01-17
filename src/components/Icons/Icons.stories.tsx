import styled from "styled-components";

import Calendar from "./Calendar";
import Clear from "./Clear";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Icons",
};

export default meta;

type Story = StoryObj;

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 1rem;

  & > * {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const Icons: Story = {
  render: () => (
    <StyledWrapper>
      <Calendar />
      <Clear />
      <PrevArrow />
      <NextArrow />
    </StyledWrapper>
  ),
};
