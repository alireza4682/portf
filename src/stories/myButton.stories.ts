import type { Meta, StoryObj } from "@storybook/react";

import { MyButton } from "./myButton";

const meta = {
  title: "components/MyButton",
  component: MyButton,
  tags: ["dude"],
  argTypes: {
    color: { control: "color" },
  },
} satisfies Meta<typeof MyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: "primary",
    label: "hi",
    size: "md",
  },
};
