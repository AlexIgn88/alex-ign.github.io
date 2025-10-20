import type { Meta, StoryObj } from '@storybook/react';
import Layout from './layout';

const meta: Meta<typeof Layout> = {
  title: 'Components/Layout',
  component: Layout,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const LayoutStory: Story = {};
