import type { Meta, StoryObj } from "@storybook/react";

import MyButton from "./MyButton.component";

const meta = {
  title: "Example/Button",
  component: MyButton,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof MyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const dude: Story = {
  args: {},
};
