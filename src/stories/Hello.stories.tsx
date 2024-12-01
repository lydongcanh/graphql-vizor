import type { Meta, StoryObj } from "@storybook/react";
import { Hello } from "../components/Hello";

const meta: Meta = {
  title: 'Components/Hello',
  component: Hello,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
  }
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    name: 'Ted',
  }
};
