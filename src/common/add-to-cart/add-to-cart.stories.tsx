import type { Meta, StoryObj } from '@storybook/react';
import AddToCart from './add-to-cart';

const meta: Meta<typeof AddToCart> = {
  title: 'Components/AddToCart',
  component: AddToCart,
  tags: ['autodocs'],
  argTypes: {
    count: {
      description: 'Количество товаров в корзине',
      control: { type: 'number', min: 0, step: 1 },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    count: 0,
  },
};

export const WithItems: Story = {
  args: {
    count: 3,
  },
};
