import NextArrow from "@components/Icons/NextArrow";
import PrevArrow from "@components/Icons/PrevArrow";

import { IconButton as Component } from "./IconButton";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Component> = {
  component: Component,
  title: "IconButton",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Next: Story = {
  args: {
    children: <NextArrow />,
  },
};

export const Prev: Story = {
  args: {
    children: <PrevArrow />,
  },
};
