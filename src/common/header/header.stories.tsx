import type { Meta, StoryObj } from '@storybook/react';
import Header from './header';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const HeaderStory: Story = {};
