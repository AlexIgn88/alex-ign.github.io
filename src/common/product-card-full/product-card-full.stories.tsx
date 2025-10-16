import type { Meta, StoryObj } from '@storybook/react';
import ProductCardFull from './product-card-full';

const meta: Meta<typeof ProductCardFull> = {
  title: 'Components/ProductCardFull',
  component: ProductCardFull,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ProductCardFullStory: Story = {
  args: {
    name: 'Gaming Laptop ASUS TUF F15',
    category: 'Electronics',
    description:
      'A high-performance gaming laptop featuring Intel Core i7, RTX 4070 GPU, 1TB SSD, and a 240Hz display. Designed for gamers and creators who demand power.',
    price: 1599.99,
    image: 'https://images.unsplash.com/photo-1610465299996-9a67d4d3e84b?w=800',
  },
};
