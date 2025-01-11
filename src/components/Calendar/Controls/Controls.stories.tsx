import Month from "../Month";
import Year from "../Year";

import { Controls as Component, Controls } from "./Controls";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Component> = {
  component: Component,
  title: "Controls",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {},
  render: () => {
    const emptyFn = () => {};
    return (
      <Controls onNext={emptyFn} onPrev={emptyFn}>
        <div>
          <Month month={"January"} /> <Year year={new Date().getFullYear()} />
        </div>
      </Controls>
    );
  },
};
