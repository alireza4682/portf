import type { Meta, StoryObj } from "@storybook/react";

import Navbar from "./navbar.component";

const meta = {
  title: "Navbar",
  component: Navbar,
  tags: [""],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const mynav: Story = {
  args: {},
};
