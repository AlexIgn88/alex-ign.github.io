import type { Meta, StoryObj } from '@storybook/react';
import OpenModalComponent from './open-modal-component';

const meta: Meta<typeof OpenModalComponent> = {
  title: 'Components/OpenModalComponent',
  component: OpenModalComponent,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
