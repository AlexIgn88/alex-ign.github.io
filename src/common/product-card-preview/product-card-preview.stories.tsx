import type { Meta, StoryObj } from '@storybook/react';
import ProductCardPreview from './product-card-preview';

const meta: Meta<typeof ProductCardPreview> = {
  title: 'Components/ProductCardPreview',
  component: ProductCardPreview,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ProductCardPreviewStory: Story = {
  args: {
    name: 'Wireless Headphones',
    description: 'Comfortable Bluetooth headphones with deep bass and 20 hours of battery life.',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1580894894513-c52a3c3f1cda?w=600',
  },
};
